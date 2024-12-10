"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useGetAllMaterial } from "@/http/(user)/learning/material/get-all-material";
import { useGetMaterialDetail } from "@/http/(user)/learning/material/get-detail-material";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface MaterialDetailProps {
  id: number;
}

export default function MaterialDetailContent({ id }: MaterialDetailProps) {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetMaterialDetail(
    { id, token: session?.access_token as string },
    { enabled: status === "authenticated" }
  );
  const router = useRouter();

  const { data: material } = useGetAllMaterial(
    {
      id: data?.data.learning_path_id ?? 0,
      token: session?.access_token as string,
    },
    { enabled: status === "authenticated" }
  );

  const [currentMaterialId, setCurrentMaterialId] = useState<number>(id);

  const materials = material?.data || [];
  const currentIndex = materials.findIndex(
    (item) => item.id === currentMaterialId
  );
  const goToMaterial = (index: number) => {
    if (index >= 0 && index < materials.length) {
      const materialId = materials[index].id;
      setCurrentMaterialId(materialId);
      router.push(`/materials/${materialId}`);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col pt-12">
        <div className="flex-1 md:space-y-12 space-y-8 pad-x">
          <div className="flex items-center gap-4 md:gap-8">
            <X className="cursor-pointer" onClick={() => router.back()} />
            <Progress value={40} />
          </div>
          <div>
            <h1 className="font-bold text-3xl">{data?.data.title}</h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-8">
            <div>
              <h1 className="font-bold text-xl">{data?.data.material_text}</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end pad-x pb-8">
          <Button
            variant={"background"}
            onClick={() => goToMaterial(currentIndex - 1)}
            disabled={currentIndex <= 0}
          >
            <ArrowLeft /> Sebelumnya
          </Button>
          <Button
            onClick={() => goToMaterial(currentIndex + 1)}
            disabled={currentIndex >= materials.length - 1}
          >
            Selanjutnya <ArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}
