"use client";

import dynamic from "next/dynamic";
import { useToast } from "@/hooks/use-toast";
import {
  addMaterialHandler,
  useAddMaterial,
} from "@/http/(admin)/material/create-materials";
import {
  materialSchema,
  MaterialType,
} from "@/validators/admin/materials/material-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";
import { useGetAllLearningPath } from "@/http/(user)/learning/get-all-learning";
import { Input } from "@/components/ui/input";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash2, UploadIcon } from "lucide-react";

export default function FormCreateMaterial() {
  const { data: session, status } = useSession();
  const form = useForm<MaterialType>({
    resolver: zodResolver(materialSchema),
    defaultValues: {
      learning_path_id: "",
      title: "",
      material_text: "",
      material_image: null,
    },
    mode: "onChange",
  });

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { mutate: addMaterialHandler, isPending } = useAddMaterial({
    onError: (error: AxiosError<any>) => {
      toast({
        title: "Gagal menambahkan materi!",
        description: error.response?.data.message,
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Berhasil menambahkan materi!",
        variant: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["materials-list"],
      });
      router.refresh();
    },
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      form.setValue("material_image", file);
      setImagePreview(URL.createObjectURL(file));
    },
    [form]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const onSubmit = (body: MaterialType) => {
    addMaterialHandler(body);
  };

  const removeImage = () => {
    setImagePreview(null);
    form.setValue("material_image", null);
  };

  const { data } = useGetAllLearningPath(session?.access_token as string, {
    enabled: status === "authenticated",
  });
  return (
    <>
      <div>
        <Form {...form}>
          <form
            className="space-y-5 pt-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="learning_path_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Learning Path</FormLabel>
                  <FormControl>
                    <Select
                      value={String(field.value)}
                      onValueChange={(value) => field.onChange(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Daftar Learning Path" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Daftar Learning Path</SelectLabel>
                          {data?.data.map((learning) => (
                            <SelectItem
                              key={learning.id}
                              value={String(learning.id)}
                            >
                              {learning.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Judul</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Masukkan judul learning path"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="material_text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Konten</FormLabel>
                  <FormControl>
                    <ReactQuill
                      value={field.value}
                      onChange={field.onChange}
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, false] }],
                          ["bold", "italic", "underline"],
                          ["link", "image"],
                          ["clean"],
                        ],
                      }}
                      style={{ color: "white" }}
                      placeholder="Masukkan konten material"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="material_image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gambar</FormLabel>
                  <FormControl>
                    <div>
                      <div
                        {...getRootProps()}
                        className={`border rounded-md border-input flex justify-center items-center cursor-pointer ${
                          isDragActive ? "border-gray-300" : "border-gray-300"
                        }`}
                      >
                        <Input {...getInputProps()} />
                        {imagePreview ? (
                          <div className="relative w-full">
                            <Image
                              src={imagePreview}
                              alt="Preview"
                              className="max-h-[200px] w-full object-cover rounded-lg"
                              width={1000}
                              height={1000}
                            />
                            <Button
                              className="absolute top-2 right-2 shadow-lg px-3"
                              variant="destructive"
                              onClick={removeImage}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : isDragActive ? (
                          <p className="text-blue-500">
                            Drop gambar di sini ...
                          </p>
                        ) : (
                          <div className="text-center space-y-4 py-4">
                            <UploadIcon className="mx-auto h-6 w-6 text-white" />
                            <p className="text-white text-sm">
                              Drag & drop gambar ke sini, atau klik untuk
                              memilih
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" disabled={isPending}>
                {isPending ? "Loading..." : "Tambahkan"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
