import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Article Coming Soon',
  description: 'This article is coming soon. Explore more insights on the Vaktel blog.',
};

const POSTS: Record<string, { title: string; category: string; readTime: string; date: string }> = {
  'ai-voice-bots-transforming-customer-service': {
    title: 'How AI Voice Bots Are Transforming Customer Service in India',
    category: 'AI & Voice',
    readTime: '6 min read',
    date: 'May 10, 2025',
  },
  'complete-guide-ivr-solutions-india': {
    title: 'The Complete Guide to IVR Solutions for Indian Businesses',
    category: 'IVR',
    readTime: '9 min read',
    date: 'May 3, 2025',
  },
  'whatsapp-business-automation-roi': {
    title: 'WhatsApp Business Automation: 10 Use Cases That Drive ROI',
    category: 'WhatsApp',
    readTime: '7 min read',
    date: 'April 25, 2025',
  },
  'sms-marketing-best-practices-2024': {
    title: 'SMS Marketing in 2025: Best Practices for Indian Enterprises',
    category: 'SMS',
    readTime: '5 min read',
    date: 'April 18, 2025',
  },
  'obd-vs-ivr-which-is-right': {
    title: 'OBD vs. IVR: Which Is Right for Your Business?',
    category: 'IVR',
    readTime: '6 min read',
    date: 'April 12, 2025',
  },
  'bfsi-ai-communication-case-study': {
    title: 'How a Leading NBFC Improved Collections by 35% with AI Calling',
    category: 'Case Study',
    readTime: '8 min read',
    date: 'April 5, 2025',
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#060d20] to-gray-900 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {post ? (
            <>
              <span className="inline-block text-xs font-semibold text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>
            </>
          ) : (
            <h1 className="text-3xl font-bold text-white">Article Not Found</h1>
          )}
        </div>
      </div>

      {/* Coming soon body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Clock className="w-8 h-8 text-brand-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Full article coming soon</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
          Our team is putting the finishing touches on this article. In the meantime, get in touch
          with us — our experts are happy to answer your questions directly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm"
          >
            Talk to an Expert
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 hover:border-brand-400 text-gray-700 hover:text-brand-600 font-semibold rounded-xl transition-all text-sm"
          >
            Browse All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
