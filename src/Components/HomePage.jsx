import { ArrowRight, Edit, Link, List } from "lucide-react"


export default function HomePage() {
    return (
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-blue-700 text-white py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sauvegardez vos vidéos de manga préférées</h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
                            Une plateforme simple pour collecter, organiser et accéder à tous vos liens de vidéos manga en un seul
                            endroit.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center justify-center">
                                Commencer gratuitement
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium border border-blue-400 hover:bg-blue-800 transition-colors">
                                En savoir plus
                            </button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Fonctionnalités</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <div className="bg-blue-600 text-white p-3 rounded-lg inline-block mb-4">
                                    <Link className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-blue-900">Ajoutez des liens</h3>
                                <p className="text-blue-700">
                                    Sauvegardez facilement les liens vers vos vidéos de manga préférées en quelques clics.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <div className="bg-blue-600 text-white p-3 rounded-lg inline-block mb-4">
                                    <Edit className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-blue-900">Éditez vos liens</h3>
                                <p className="text-blue-700">
                                    Modifiez les informations de vos liens à tout moment pour garder votre collection à jour.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <div className="bg-blue-600 text-white p-3 rounded-lg inline-block mb-4">
                                    <List className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-blue-900">Accédez à vos liens</h3>
                                <p className="text-blue-700">
                                    Retrouvez et visionnez vos vidéos en un clic grâce à notre interface intuitive.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section id="how-it-works" className="py-16 bg-blue-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Comment ça marche</h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row items-center mb-12">
                                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                                    <div className="bg-blue-100 rounded-xl p-2">
                                        <div className="aspect-video bg-blue-200 rounded-lg flex items-center justify-center">
                                            <img src="/placeholder.svg?height=240&width=320" alt="Créez un compte" className="rounded-lg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                                        1
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-blue-900">Créez un compte</h3>
                                    <p className="text-blue-700">
                                        Inscrivez-vous gratuitement en quelques secondes pour commencer à utiliser toutes les
                                        fonctionnalités.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row-reverse items-center mb-12">
                                <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
                                    <div className="bg-blue-100 rounded-xl p-2">
                                        <div className="aspect-video bg-blue-200 rounded-lg flex items-center justify-center">
                                            <img src="/placeholder.svg?height=240&width=320" alt="Ajoutez vos liens" className="rounded-lg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                                        2
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-blue-900">Ajoutez vos liens</h3>
                                    <p className="text-blue-700">
                                        Copiez-collez simplement l'URL de la vidéo et ajoutez des informations comme le titre ou la
                                        description.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                                    <div className="bg-blue-100 rounded-xl p-2">
                                        <div className="aspect-video bg-blue-200 rounded-lg flex items-center justify-center">
                                            <img
                                                src="/placeholder.svg?height=240&width=320"
                                                alt="Accédez à votre collection"
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                                        3
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-blue-900">Accédez à votre collection</h3>
                                    <p className="text-blue-700">
                                        Retrouvez tous vos liens organisés et prêts à être visionnés, où que vous soyez.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}

