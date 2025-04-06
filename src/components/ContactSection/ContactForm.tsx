import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, AlertTriangle } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

type SubmissionStatus = 'idle' | 'success' | 'error';

const ContactForm = memo(() => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus('idle');
        setErrorMessage('');

        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setIsSubmitting(false);
            setSubmissionStatus('error');
            setErrorMessage('Please fill in all fields.');
            return;
        }

        // Email validation (basic)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setIsSubmitting(false);
            setSubmissionStatus('error');
            setErrorMessage('Invalid email address.');
            return;
        }

        // Simulate an API call (replace with your actual backend logic)
        try {
            // Simulate a delay
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Simulate success or failure (replace with actual response handling)
            const success = Math.random() > 0.2; // 80% success rate for demo

            if (success) {
                setFormData({ name: '', email: '', message: '' }); // Clear form on success
                setSubmissionStatus('success');
            } else {
                setSubmissionStatus('error');
                setErrorMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            setSubmissionStatus('error');
            setErrorMessage('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="mt-1 bg-white/80 text-gray-900 border-gray-300 placeholder:text-gray-400"
                    disabled={isSubmitting}
                    aria-required="true"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-1 bg-white/80 text-gray-900 border-gray-300 placeholder:text-gray-400"
                    disabled={isSubmitting}
                    aria-required="true"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                </label>
                <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={4}
                    className="mt-1 bg-white/80 text-gray-900 border-gray-300 placeholder:text-gray-400"
                    disabled={isSubmitting}
                    aria-required="true"
                />
            </div>
            <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg hover:scale-105 transition-all duration-300"
                disabled={isSubmitting}
                aria-label={isSubmitting ? "Sending message..." : "Send message"}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                        Sending...
                    </>
                ) : (
                    'Send Message'
                )}
            </Button>
            <AnimatePresence>
                {submissionStatus === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-green-100 text-green-600 p-3 rounded-md flex items-center gap-2 border border-green-300"
                        role="alert"
                        aria-live="polite"
                    >
                        <CheckCircle className="w-5 h-5" aria-hidden="true" />
                        Message sent successfully!
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {submissionStatus === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-red-100 text-red-600 p-3 rounded-md flex items-center gap-2 border border-red-300"
                        role="alert"
                        aria-live="assertive"
                    >
                        <AlertTriangle className="w-5 h-5" aria-hidden="true" />
                        {errorMessage}
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;
