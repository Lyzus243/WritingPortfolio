import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const WritingPage = () => {
  const { id } = useParams();

  const writings = {
    'reflective-essay': {
      title: 'The Dance of Creativity and Learning',
      content: `# The Dance of Creativity and Learning

In the quiet moments between thoughts, where ideas swirl like autumn leaves in a gentle breeze, I find the true essence of creativity. It's not the grand revelation or the sudden spark of genius, but rather the patient cultivation of curiosity that leads to meaningful discovery.

Learning, I've come to understand, is not a linear path but a spiral dance. Each revolution brings us back to familiar ground, yet at a higher vantage point. We see the same landscape, but with new eyes, enriched by experiences and insights gathered along the way.

Creativity thrives in this spiral. It feeds on the connections we make between seemingly disparate ideas, the patterns we discern in chaos, the beauty we find in complexity. When we learn with intention, we don't just accumulate knowledge—we transform it through creative expression.

The most profound learning happens when we allow ourselves to be vulnerable, to question our assumptions, to embrace uncertainty. In these moments, creativity becomes our guide, illuminating paths we never knew existed.

As I continue this journey, I carry with me the understanding that creativity and learning are not separate pursuits, but intertwined threads in the tapestry of human experience. Each informs the other, each challenges the other, each completes the other.

In the end, it's not about reaching a destination, but about the joy of the dance itself.`
    },
    'narrative-story': {
      title: 'The Last Letter',
      content: `# The Last Letter

The old oak desk creaked under the weight of memories as Elena sat down to write. Her hands, once steady and sure, now trembled slightly with the passage of years. The room was filled with the soft glow of afternoon light filtering through lace curtains, dust motes dancing in the golden beams.

"Dear Thomas," she began, the words flowing from a place deep within her soul. "It's been forty-seven years since you left, but it feels like yesterday. The children are grown now, with families of their own. Sarah teaches literature at the university, just as you always dreamed she would. Michael runs the farm with the same quiet determination you showed every harvest season.

I still tend the garden you planted that first spring. The roses you brought me on our anniversary still bloom every June, their petals as vibrant as the day you placed them in my hands. Sometimes, when the wind carries their scent through the open window, I close my eyes and imagine you're here beside me.

The world has changed so much since you went away. Men have walked on the moon, computers fit in our pockets, and yet some things remain constant. Love endures. Memory persists. The heart continues to beat with the rhythm of those we have loved and lost.

I miss you every day, my darling. The empty space beside me in bed, the chair at the dinner table that remains unoccupied, the conversations we never got to have. But I carry you with me in every smile, every tear, every moment of joy and sorrow.

Until we meet again, know that you were my everything, and I loved you more than words could ever express.

Forever yours,  
Elena"`
    },
    'informational-article': {
      title: 'The Art of Clear Communication in the Digital Age',
      content: `# The Art of Clear Communication in the Digital Age

In an era of instant messaging, social media updates, and endless notifications, the ability to communicate clearly has never been more crucial—or more challenging. As we navigate this digital landscape, understanding the principles of effective communication becomes essential for personal and professional success.

## The Foundation: Clarity Above All

Clear communication begins with a simple premise: your message should be understood exactly as you intend it. This means choosing words carefully, structuring your thoughts logically, and anticipating potential misunderstandings.

Consider the difference between "I need this done by Friday" and "Could you please complete this task by end of business Friday? It would help me meet my deadline." The second version provides context, expresses politeness, and sets clear expectations.

## Digital Tools, Human Connection

While technology has revolutionized how we communicate, it hasn't changed the fundamental human need for connection. Email, video calls, and instant messaging are tools, not replacements for thoughtful interaction.

When crafting digital messages:
- Use subject lines that accurately reflect content
- Keep paragraphs short and focused
- Employ formatting (bold, italics, bullet points) to improve readability
- Proofread before sending

## The Power of Active Listening

Communication is a two-way street. Active listening—fully concentrating, understanding, responding, and remembering what is being said—is crucial for meaningful exchange.

In digital conversations, active listening means:
- Reading messages carefully before responding
- Asking clarifying questions when needed
- Acknowledging others' points before sharing your own
- Being present during video calls, not multitasking

## Cultural Considerations

In our globalized world, clear communication often crosses cultural boundaries. What seems direct in one culture might appear rude in another. Developing cultural awareness and adapting your communication style accordingly can prevent misunderstandings and build stronger relationships.

## The Future of Communication

As artificial intelligence and machine learning continue to evolve, they will undoubtedly play larger roles in how we communicate. However, the human elements—empathy, creativity, and emotional intelligence—will remain irreplaceable.

The key to clear communication in the digital age lies not in mastering the latest tools, but in remembering that behind every screen is a human being deserving of respect, understanding, and clear expression.

By prioritizing clarity, empathy, and intentionality in our communications, we can bridge divides, build connections, and create a more understanding world—one message at a time.`
    }
  };

  const writing = writings[id];

  if (!writing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Writing Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-serif">
              {writing.title}
            </h1>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
          </header>

          <div className="prose dark:prose-invert max-w-none">
            <pre className="whitespace-pre-wrap font-serif text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {writing.content}
            </pre>
          </div>
        </article>
      </div>
    </div>
  );
};

export default WritingPage;
