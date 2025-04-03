"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - would connect to an API in a real application
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Get in touch for collaborations, inquiries, or to schedule a consultation.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-gray-500" />
            <div>
              <h3 className="font-medium">Studio Address</h3>
              <p className="text-gray-500">123 Fashion Avenue, Design District</p>
              <p className="text-gray-500">New York, NY 10001</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-gray-500" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-500">info@elenamoda.com</p>
              <p className="text-gray-500">collaborations@elenamoda.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-gray-500" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-gray-500">+1 (212) 555-7890</p>
              <p className="text-gray-500">Mon-Fri: 9am - 6pm EST</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={5}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}

