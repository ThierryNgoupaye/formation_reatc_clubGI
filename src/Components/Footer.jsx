import {BookOpen} from "lucide-react";

export default function Footer()
{
    return (
    <footer className="bg-blue-900 text-blue-200 py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center space-x-2 mb-4">
                        <BookOpen className="h-6 w-6" />
                        <span className="text-xl font-bold text-white">MangaLinks</span>
                    </div>
                    <p className="max-w-xs">
                        La meilleure façon de sauvegarder et d'organiser vos vidéos de manga préférées.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-white font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="hover:text-white transition-colors">
                                    Fonctionnalités
                                </a>
                            </li>
                            <li>
                                <a href="#how-it-works" className="hover:text-white transition-colors">
                                    Comment ça marche
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Légal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Conditions d'utilisation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Politique de confidentialité
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Mentions légales
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Nous contacter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
                <p>© {new Date().getFullYear()} MangaLinks. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
    )
}