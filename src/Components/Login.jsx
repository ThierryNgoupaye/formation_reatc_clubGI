import { useState } from "react"
import {  LogIn, User, Lock, Eye, EyeOff } from "lucide-react"



export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Login attempt with:", formData)
    }

    return (
            <div className="flex-grow flex items-center justify-center py-12 px-4">
                <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-blue-900">Connexion</h1>
                        <p className="text-blue-600 mt-2">Accédez à votre collection de liens manga</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="username" className="block text-sm font-medium text-blue-900">
                                Nom d'utilisateur
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-blue-400" />
                                </div>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Entrez votre nom d'utilisateur"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-blue-900">
                                Mot de passe
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-blue-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-10 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Entrez votre mot de passe"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-blue-400 hover:text-blue-600 focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>
                            <div className="text-right">
                                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                                    Mot de passe oublié ?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center bg-blue-600 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                        >
                            <LogIn className="mr-2 h-5 w-5" />
                            Se connecter
                        </button>

                        <div className="text-center mt-6">
                            <p className="text-blue-700">
                                Vous n'avez pas de compte ?{" "}
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-800">
                                    S'inscrire
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
    )
}

