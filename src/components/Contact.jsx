import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL = 'kimjiyoon0816@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/aroundjiyoon/'

export default function Contact() {
	const [copied, setCopied] = useState(false)

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(EMAIL)
			setCopied(true)
			setTimeout(() => setCopied(false), 1500)
		} catch {
			// Fallback
			const textarea = document.createElement('textarea')
			textarea.value = EMAIL
			document.body.appendChild(textarea)
			textarea.select()
			try {
				document.execCommand('copy')
				setCopied(true)
				setTimeout(() => setCopied(false), 1500)
			} finally {
				document.body.removeChild(textarea)
			}
		}
	}

	return (
		<section 
			id="contact" 
			className="min-h-screen snap-start flex flex-col items-center justify-center bg-gradient-to-b from-navy-900 to-black px-6">
			<div className="mx-auto w-full max-w-3xl text-center">
				<motion.h2
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-20%' }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className="text-4xl md:text-5xl font-serif text-center text-white mb-12 md:mb-16"
				>
					Let's Work Together
				</motion.h2>

				<motion.div
					initial={{ opacity: 0, y: 8 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-20%' }}
					transition={{ duration: 0.5 }}
					className="mx-auto flex max-w-xl flex-col items-center gap-6"
				>
					<div className="w-full rounded-xl border border-white/10 bg-white/5 p-5">
						<div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
							<div className="text-white/90">{EMAIL}</div>
							<button
								type="button"
								onClick={copyEmail}
								className="rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
								aria-label="이메일 주소 복사"
							>
								{copied ? '복사됨' : '복사하기'}
							</button>
						</div>
					</div>

					<a
						href={LINKEDIN}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
					>
						LinkedIn 프로필 열기 →
					</a>
				</motion.div>
			</div>
		</section>
	)
}


