"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

function AddNewStudent() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>+ Add new Student</Button>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-3">
                  <label className=" mb-3">Full Name</label>
                  <Input
                    placeholder="Ex. John McPhy"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="py-3">
                  <label className=" mb-3">Contact Number</label>
                  <Input
                    type="number"
                    placeholder="1234567890"
                    {...register("contact", { required: true })}
                  />
                </div>
                <div className="py-3">
                  <label className=" mb-3">Address</label>
                  <Input
                    placeholder="Ex. A-31 Mark Vila"
                    {...register("address", { required: true })}
                  />
                </div>
                <div className="flex py-3 flex-col">
                  <label>Select Class</label>
                  <select
                    className="p-3 border rounded-lg bg-white"
                    {...register("class", { required: true })}
                  >
                    <option value={"Btech sem1"}>"Btech Sem1"</option>
                    <option value={"Btech sem3"}>Btech Sem3</option>
                    <option value={"Bsc sem1"}>Bsc Sem1</option>
                    <option value={"Bsc sem3"}>Bsc Sem3</option>
                  </select>
                </div>

                <div className="flex gap-3 justify-end mt-5 items-center">
                  <Button onClick={() => setOpen(false)} variant="ghost">
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewStudent;
