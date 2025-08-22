"use client";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thanks for your message!");
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 max-w-sm"
            >
                <input
                    type="text"
                    placeholder="Your Name"
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="border p-2 rounded"
                    required
                />
                <textarea
                    placeholder="Message"
                    className="border p-2 rounded"
                    required
                />
                <button
                    type="submit"
                    className="bg-gray-800 text-white p-2 rounded"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
