export default function About() {

    const features = [
  "🔐 Secure User Authentication",
  "📄 Upload & Download Documents",
  "📁 Category-Based Organization",
  "🔍 Fast Search & Navigation",
  "👥 Role-Based Access Control",
  "⚡ Responsive & Modern UI",
];
    return(
        <div className="min-h-screen bg-amber-50  py-16 px-6">

            <div className="max-w-6xl mx-auto bg-white  rounded-2xl shadow-xl  p-10">

                <h1 className="text-5xl font-bold text-center text-amber-600  mb-8">
                About Document Management System
                </h1>

                <p className="text-lg text-gray-600 text-center leading-8 mb-12">
                Our Document Management System helps individuals and organizations
                securely store, organize, and manage digital documents from one
                centralized platform. Access your files anytime with a fast,
                secure, and user-friendly experience.
                </p>

                <div className="grid md:grid-cols-2 gap-10 ">

                    <div className="bg-amber-100 rounded-xl p-6  shadow-xl hover:shadow-2xl transition hover:-translate-y-3 duration-500">

                        <h2 className="text-2xl font-semibold  text-amber-700 mb-4">
                        Our Mission
                        </h2>

                        <p className="text-gray-700 leading-7 ">
                        To simplify document storage and retrieval by providing a
                        secure, scalable, and easy-to-use platform that improves
                        productivity and collaboration.
                        </p>

                    </div>

                    <div className="bg-amber-100 rounded-xl  p-6 shadow-xl hover:shadow-2xl transition hover:-translate-y-3 duration-500">

                        <h2 className="text-2xl font-semibold text-amber-700   mb-4">
                        Our Vision
                        </h2>

                        <p className="text-gray-700 leading-7 ">
                        To become a trusted solution for managing digital documents,
                        ensuring security, accessibility, and efficiency for every user.
                        </p>

                    </div>

                </div>

                <div className="mt-14">

                    <h2 className="text-3xl font-bold text-center text-gray-800  mb-8">
                        Key Features
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {features.map((feature, index) => (
                        <div key={index} className="bg-white border  border-amber-200 rounded-xl p-5 shadow hover:shadow-lg transition
                         hover:bg-amber-200 hover:-translate-y-2 duration-500 ">
                        
                        {feature}
                        </div>
                    ))}
                    </div>

                </div>

            </div>

        </div>
    )
}