import { MehandiType } from '@/app/api';
import React, { useState } from 'react';


// import type { NextApiRequest, NextApiResponse } from "next";
// import sendgrid from "@sendgrid/mail";

// // sendgrid.setApiKey(process.env.SENDGRID_API_KEY!); // Load the API key from environment variables

// export async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === "POST") {
//         const { name, date, phone, mehndiType, notes } = req.body;

//         // Validate required fields
//         if (!name || !date || !phone || !mehndiType) {
//             return res.status(400).json({ message: "All fields are required." });
//         }

//         try {
//             // Compose email details
//             const emailContent = {
//                 to: "admin-email@example.com", // Replace with admin email
//                 from: "your-email@example.com", // Must match your verified SendGrid sender
//                 subject: "New mehandi Booking",
//                 text: `
//           New mehandi Booking Received:
//           - Name: ${name}
//           - Date: ${date}
//           - Phone: ${phone}
//           - mehandi Type: ${mehndiType}
//           - Notes: ${notes || "None"}
//         `,
//                 html: `
//           <h1>New mehandi Booking Received</h1>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Date:</strong> ${date}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>mehandi Type:</strong> ${mehndiType}</p>
//           <p><strong>Notes:</strong> ${notes || "None"}</p>
//         `,
//             };

//             // Send email
//             await sendgrid.send(emailContent);

//             res.status(200).json({ message: "Booking received and email sent!" });
//         } catch (error) {
//             console.error("Error sending email:", error);
//             res.status(500).json({ message: "Failed to send email. Please try again." });
//         }
//     } else {
//         res.status(405).json({ message: "Method not allowed." });
//     }
// }




interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: string
}



const BookNowModal: React.FC<ModalProps> = ({ isOpen, onClose, type }) => {
    const [isBooking, setIsBooking] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        phone: "",
        mehndiType: type, // Default option
        notes: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here (API call, email, etc.)
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark bg-opacity-50">
            <div className="bg-primaryBg w-11/12 max-w-lg p-6 rounded-lg shadow-lg relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-darkBrown hover:text-lightBrown"
                >
                    ✖
                </button>

                {/* Modal Content */}
                {!isBooking ? (
                    <>
                        <h2 className="text-xl font-bold text-center text-darkBrown mb-4">Book Now</h2>
                        <p className="text-center text-darkYellow mb-6">
                            How would you like to contact us?
                        </p>
                        <div className="flex flex-col space-y-4">
                            <a
                                href="tel:+1234567890"
                                className="bg-mediumBrown text-white py-2 px-4 rounded-lg text-center shadow hover:bg-darkBrown"
                            >
                                Call Us
                            </a>
                            <a
                                href="https://wa.me/1234567890"
                                className="bg-lightYellow text-dark py-2 px-4 rounded-lg text-center shadow hover:bg-darkYellow"
                                target='_blank'
                            >
                                WhatsApp
                            </a>
                            <button
                                onClick={() => setIsBooking(true)}
                                className="bg-darkBrown text-white py-2 px-4 rounded-lg text-center shadow hover:bg-mediumBrown"
                            >
                                Book mehandi Design
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-bold text-center text-darkBrown mb-4">
                            Book a mehandi Design
                        </h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-darkBrown"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-mediumBrown rounded-lg py-2 px-3 text-darkBrown bg-white"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            {/* Date Field */}
                            <div>
                                <label
                                    htmlFor="date"
                                    className="block text-sm font-medium text-darkBrown"
                                >
                                    Event Date
                                </label>
                                <input
                                    id="date"
                                    type="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full border border-mediumBrown rounded-lg py-2 px-3 text-darkBrown bg-white"
                                    required
                                />
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-darkBrown"
                                >
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border border-mediumBrown rounded-lg py-2 px-3 text-darkBrown bg-white"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            {/* mehandi Type Field */}
                            <div>
                                <label
                                    htmlFor="mehndiType"
                                    className="block text-sm font-medium text-darkBrown"
                                >
                                    mehandi Type
                                </label>
                                <select
                                    id="mehndiType"
                                    value={formData.mehndiType}
                                    onChange={handleChange}
                                    className="w-full border border-mediumBrown rounded-lg py-2 px-3 text-darkBrown bg-white"
                                    required
                                >
                                    <option value="Arabic">Arabic</option>
                                    <option value="Bridal">Bridal</option>
                                    <option value="Baby Shower">Baby Shower</option>
                                    <option value="Engagement">Engagement</option>
                                    <option value="Traditional">Traditional</option>
                                    <option value="Party">Party</option>
                                    <option value="Leg">Leg</option>
                                </select>
                            </div>

                            {/* Notes Field */}
                            <div>
                                <label
                                    htmlFor="notes"
                                    className="block text-sm font-medium text-darkBrown"
                                >
                                    Additional Notes
                                </label>
                                <textarea
                                    id="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    className="w-full border border-mediumBrown rounded-lg py-2 px-3 text-darkBrown bg-white"
                                    rows={3}
                                    placeholder="Mention any specific design or requirement"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-mediumBrown text-white py-2 px-4 rounded-lg shadow hover:bg-darkBrown"
                            >
                                Submit Booking
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default BookNowModal;
