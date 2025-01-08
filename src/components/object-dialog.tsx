import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type IObject } from "@/types";

export type ObjectDialogProps = {
  title: string;
  descr: string;
  data?: Partial<IObject>;
  callback: (data: FormData | null) => void;
  open: boolean;
};

export function ObjectDialog({ title, descr, data, open, callback }: ObjectDialogProps) {
  const isNew = !!data;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    callback(formData);
  };
  const handleOpen = (o:boolean) => {
    if (!o) callback(null);
  }
  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <form onSubmit={handleSubmit}>
        <DialogContent className="sm:max-w-[425px]" >
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{descr}</DialogDescription>
          </DialogHeader>
          <div className="flex-col gap-4">
            <div className="">
              <Label htmlFor="name" className="">
                Название
              </Label>
              <Input id="name" defaultValue={data?.name || ""} required className="col-span-3" />
            </div>
          </div>
          <DialogFooter className="gap-y-4 flex-col">
            <Button type="submit">Сохранить</Button>
            <Button type="button" variant="secondary" onClick={() => callback(null)}>
              Закрыть
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
