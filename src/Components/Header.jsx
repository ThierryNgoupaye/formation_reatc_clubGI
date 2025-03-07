import {BookOpen, LogIn} from "lucide-react";


export default function Header()
{

    return (
        <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-md">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div onClick={()=>window.location.href="/"} className="flex items-center space-x-2 cursor-pointer">
                        <BookOpen className="h-6 w-6"/>
                        <span className="text-xl font-bold">MangaLinks</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="hover:text-blue-200 transition-colors">
                            Fonctionnalités
                        </a>
                        <a href="#how-it-works" className="hover:text-blue-200 transition-colors">
                            Comment ça marche
                        </a>
                        <a href="#about" className="hover:text-blue-200 transition-colors">
                            À propos
                        </a>
                    </nav>
                    <button onClick={()=>window.location.href="/login"}
                        className="cursor-pointer flex items-center space-x-1 bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition-colors">
                        <LogIn className="h-4 w-4"/>
                        <span>Connexion</span>
                    </button>
                </div>
            </div>
        </header>
    )
}