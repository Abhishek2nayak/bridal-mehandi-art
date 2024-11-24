"use client";

import { useState } from "react";

interface FormData {
    name: string;
    date: string;
    phone: string;
    mehndiTypes: string[]; // Array for multi-select
    notes: string;
}

export default function BookNow() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        date: "",
        phone: "",
        mehndiTypes: [], // Initialize as an empty array
        notes: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { id, value, type, checked } = e.target;

        // Handle mehandi Types (multi-select)
        if (type === "checkbox" && id.startsWith("mehndiType")) {
            const selectedType = value;
            setFormData((prev) => {
                const updatedTypes = checked
                    ? [...prev.mehndiTypes, selectedType]
                    : prev.mehndiTypes.filter((type) => type !== selectedType);

                return { ...prev, mehndiTypes: updatedTypes };
            });
        } else {
            setFormData((prev) => ({ ...prev, [id]: value }));
        }
    };

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { id, value } = e.target; // Extract the `id` and `value` from the textarea element
        setFormData((prev) => ({
            ...prev,
            [id]: value, // Update the corresponding field in formData
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, date, phone, mehndiTypes, notes } = formData;
        const message = encodeURIComponent(
            `Hello, I would like to book a mehandi design:\n\n` +
            `Name: ${name}\n` +
            `Event Date: ${date}\n` +
            `Phone: ${phone}\n` +
            `mehandi Types: ${mehndiTypes.join(", ")}\n` +
            `Additional Notes: ${notes}\n\n` +
            `Please confirm my booking.`

        );

        const ownerWhatsAppNumber = "7417245847";

        // Redirect to WhatsApp
        window.open(`https://wa.me/${ownerWhatsAppNumber}?text=${message}`, "_blank");


    };

    return (
        <>
            <h2 className="text-3xl pb-5 font-bold text-center text-darkBrown mb-4">
                Book a mehandi Design
            </h2>
            <div className="flex justify-center gap-10 mb-5">
                <a
                    href="tel:+7417245847"
                    className="w-[200px] bg-mediumBrown text-white py-2 px-4 rounded-lg text-center shadow hover:bg-darkBrown transition duration-300"
                >
                    Call Us
                </a>
                <a
                    href="https://wa.me/7417245847"
                    className="w-[200px] bg-lightYellow text-dark py-2 px-4 rounded-lg text-center shadow hover:bg-darkYellow transition duration-300"
                    target="_blank"
                >
                    WhatsApp
                </a>
            </div>
            <div className="flex justify-center mb-5">
                <div style={{ width: "500px", maxWidth: "800px" }}>
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
                                className="w-full border border-mediumBrown rounded-lg py-2 px-3 text-darkBrown bg-white focus:outline-none focus:ring focus:ring-lightYellow"
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
                                className="w-full border border-mediumBrown rounded-lg py-2 px-3 text-darkBrown bg-white focus:outline-none focus:ring focus:ring-lightYellow"
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
                                className="w-full border border-mediumBrown rounded-lg py-2 px-3 text-darkBrown bg-white focus:outline-none focus:ring focus:ring-lightYellow"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        {/* mehandi Type Field (Multi-Select with Checkboxes) */}
                        <div>
                            <label
                                className="block text-sm font-medium text-darkBrown mb-2"
                            >
                                mehandi Types
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    "Arabic",
                                    "Bridal",
                                    "Baby Shower",
                                    "Engagement",
                                    "Traditional",
                                    "Party",
                                    "Leg",
                                ].map((type) => (
                                    <label
                                        key={type}
                                        className="inline-flex items-center"
                                    >
                                        <input
                                            type="checkbox"
                                            id={`mehndiType-${type}`}
                                            value={type}
                                            checked={formData.mehndiTypes.includes(type)}
                                            onChange={handleChange}
                                            className="form-checkbox text-mediumBrown focus:ring-lightYellow"
                                        />
                                        <span className="ml-2 text-darkBrown">{type}</span>
                                    </label>
                                ))}
                            </div>
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
                                onChange={handleTextAreaChange}
                                className="w-full border border-mediumBrown rounded-lg py-2 px-3 text-darkBrown bg-white focus:outline-none focus:ring focus:ring-lightYellow"
                                rows={3}
                                placeholder="Mention any specific design or requirement"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-mediumBrown text-white py-2 px-4 rounded-lg shadow hover:bg-darkBrown transition duration-300"
                        >
                            Submit Booking
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
