"use client";

import dynamic from "next/dynamic";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Trash, Trash2, UploadIcon } from "lucide-react";
import { useGetAllQuizAdmin } from "@/http/(admin)/quiz/get-all-quiz";
import {
  questionSchema,
  QuestionType,
} from "@/validators/admin/question/question-validator";
import { useAddQuestion } from "@/http/(admin)/question/create-question";
import { Checkbox } from "@/components/ui/checkbox";

export default function FormCreateQuestion() {
  const { data: session } = useSession();
  const form = useForm<QuestionType>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      quiz_id: "",
      question_text: "",
      question_image: null,
      answers: [{ answer_text: "", is_correct: false }],
    },
    mode: "onChange",
  });

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { mutate: addQuestionHandler, isPending } = useAddQuestion({
    onError: (error) => {
      toast({
        title: "Gagal menambahkan pertanyaan!",
        description: error.message,
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({ title: "Berhasil menambahkan pertanyaan!", variant: "success" });
      queryClient.invalidateQueries({ queryKey: ["questions-list"] });
      router.push("/dashboard/admin/quizzes");
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "answers",
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      form.setValue("question_image", file);
      setImagePreview(URL.createObjectURL(file));
    },
    [form]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const onSubmit = (data: QuestionType) => addQuestionHandler(data);

  const { data } = useGetAllQuizAdmin(session?.access_token as string);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="quiz_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pilih Quiz</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Kuis" />
                </SelectTrigger>
                <SelectContent>
                  {data?.data.map((quiz) => (
                    <SelectItem key={quiz.id} value={quiz.id}>
                      {quiz.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="question_text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pertanyaan</FormLabel>
              <Input placeholder="Masukkan pertanyaan" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="question_image"
          render={() => (
            <FormItem>
              <FormLabel>Gambar Pertanyaan</FormLabel>
              <div
                {...getRootProps()}
                className="border rounded-md p-4 text-center cursor-pointer"
              >
                <input {...getInputProps()} />
                {imagePreview ? (
                  <div>
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      width={300}
                      height={200}
                    />
                    <Button
                      onClick={() => setImagePreview(null)}
                      variant="destructive"
                      className="mt-2"
                    >
                      Hapus Gambar
                    </Button>
                  </div>
                ) : (
                  <p>Drag & drop atau klik untuk upload gambar</p>
                )}
              </div>
            </FormItem>
          )}
        />
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <FormLabel>Opsi Jawaban</FormLabel>
            <Button
              className="border-0"
              type="button"
              size={"sm"}
              onClick={() => append({ answer_text: "", is_correct: false })}
            >
              <Plus className="text-white" />
            </Button>
          </div>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-4 items-center">
              <FormField
                control={form.control}
                name={`answers.${index}.is_correct`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => {
                            const updatedAnswers = [
                              ...form.getValues("answers"),
                            ];
                            updatedAnswers.forEach((answer, i) => {
                              updatedAnswers[i].is_correct =
                                i === index ? checked : false;
                            });
                            form.setValue("answers", updatedAnswers);
                          }}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Input
                placeholder="Isi jawaban"
                {...form.register(`answers.${index}.answer_text` as const)}
              />
              <Button
                className="w-fit border-0"
                size={"sm"}
                onClick={() => remove(index)}
                variant="destructive"
              >
                <Trash2 />
              </Button>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Loading..." : "Tambah Pertanyaan"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
