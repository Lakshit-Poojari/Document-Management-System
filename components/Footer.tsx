export default function Footer() { 
    return ( 
        <>
            <footer className="bg-gray-900 text-white border-t border-gray-700 mt-16 "> 
                <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-8"> 
                    {/* Logo & Description */} 
                    <div className="text-center md:text-left"> 
                        <h2 className="text-3xl font-bold text-amber-400"> DMS </h2> 
                        <p className="mt-3 text-gray-400 max-w-sm leading-7"> 
                            Securely manage, organize, and access your documents from anywhere with a modern and reliable document 
                            management platform. 
                        </p> 
                    </div> 
                    
                    {/* Navigation */} 
                    <div> 
                        <ul className="flex flex-wrap justify-center gap-8 text-lg"> 
                            <li> <a href="/" className="hover:text-amber-400 transition duration-300" > Home </a> </li> 
                            <li> <a href="/about" className="hover:text-amber-400 transition duration-300" > About </a> </li> 
                            <li> <a href="/login" className="hover:text-amber-400 transition duration-300" > Login </a> </li> 
                            <li> <a href="/register" className="hover:text-amber-400 transition duration-300" > Register </a> </li> 
                            <li> <a href="/dashboard" className="hover:text-amber-400 transition duration-300" > Dashboard </a> </li> 
                        </ul> 
                    </div> 
                </div> 
                <div className="border-t border-gray-700 py-5"> 
                    <p className="text-center text-gray-500 text-sm"> 
                    © {new Date().getFullYear()} Document Management System. All Rights Reserved. </p> 
                </div> 
            </footer> 
        </>
    ); 
}
        