'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookTableForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    people: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `New Table Booking:
Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Time: ${form.time}
People: ${form.people}`;

    const whatsappLink = `https://wa.me/917041167089?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.location.href = whatsappLink;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required className="border p-2 w-full" />
      <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required className="border p-2 w-full" />
      <input type="date" name="date" onChange={handleChange} required className="border p-2 w-full" />
      <input type="time" name="time" onChange={handleChange} required className="border p-2 w-full" />
      <input type="number" name="people" placeholder="Number of People" onChange={handleChange} required className="border p-2 w-full" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Book via WhatsApp</button>
    </form>
  );
}
