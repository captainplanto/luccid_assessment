"use client";
import { useState } from "react";
import { InputComponent } from "./InputComponent";
import { GroupButtonComponent } from "./GroupButtonComponent";
import { IForm } from "@/types/type";

const GroupInputComponent = () => {
  const [form, setForm] = useState<IForm>({
    companyName: "",
    representative: "",
    contactNumber: "",
    address: "",
    vatId: "",
    email: "",
    password: "",
  });

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log(form.companyName, "change form");
  };

  const handleSubmit = (e?: any) => {
    e.preventDefault();
    console.log(form, "Submitted...");
  };
  return (
    <>
      <InputComponent
        type="text"
        placeholder="Company Name"
        value={form.companyName}
        name="companyName"
        onchange={onchange}
      />
      <InputComponent
        type="text"
        placeholder="Name of Company's Representative"
        value={form.representative}
        name="representative"
        onchange={onchange}
      />
      <InputComponent
        type="number"
        placeholder="Contact Phone"
        value={form.contactNumber}
        name="contactNumber"
        onchange={onchange}
      />
      <InputComponent
        type="text"
        placeholder="Address"
        value={form.address}
        name="address"
        onchange={onchange}
      />
      <InputComponent
        type="text"
        placeholder="VAT ID"
        value={form.vatId}
        name="vatId"
        onchange={onchange}
      />

      <InputComponent
        type="text"
        placeholder="Email"
        value={form.email}
        name="email"
        onchange={onchange}
      />
      <InputComponent
        type="password"
        placeholder="Set Password"
        value={form.password}
        name="password"
        onchange={onchange}
      />
      <GroupButtonComponent handleSubmit={handleSubmit} type="submit" />
    </>
  );
};
export default GroupInputComponent;
