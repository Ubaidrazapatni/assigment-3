import React from 'react'

function Footer() {
    return (
        <div>

            <footer className="bg-slate-900 text-white py-4">
                <div className="container mx-auto text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                    <p className="text-sm">
                        <a href="/privacy" className="text-blue-400 hover:underline">
                            Privacy Policy
                        </a>{" "}|{" "}
                        <a href="/terms" className="text-blue-400 hover:underline">
                            Terms of Service
                        </a>
                    </p>
                </div>
            </footer>

        </div>
    )
}

export default Footer
