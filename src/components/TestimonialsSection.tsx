import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { REVIEWS_DATA } from '../data/faqAndReviews';
import { Star, Instagram, CheckCircle2, Award, Users, ShieldCheck, Sparkles, MessageSquarePlus, X, Send } from 'lucide-react';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [userComment, setUserComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setReviewModalOpen(false);
      setUserName('');
      setUserComment('');
    }, 2500);
  };

  return (
    <section id="depoimentos" className="py-20 relative bg-[#0b0714]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{t.testimonials.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-purple-200/70 text-sm sm:text-base mt-3">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Claim-to-Proof Adjacency Stats - 100% Translated */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-3xl bg-[#130b24] border border-purple-500/25 text-center neon-border-purple">
            <div className="flex items-center justify-center gap-1 text-amber-300 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-300" />
              ))}
            </div>
            <div className="text-2xl font-black text-white tabular-nums font-mono">{t.testimonials.stats.rating}</div>
            <div className="text-xs text-purple-300/80 mt-1">{t.testimonials.stats.ratingLabel}</div>
          </div>

          <div className="p-5 rounded-3xl bg-[#130b24] border border-purple-500/25 text-center neon-border-purple">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 mx-auto mb-1">
              <Users className="w-4 h-4" />
            </div>
            <div className="text-2xl font-black text-white tabular-nums font-mono">{t.testimonials.stats.clients}</div>
            <div className="text-xs text-purple-300/80 mt-1">{t.testimonials.stats.clientsLabel}</div>
          </div>

          <div className="p-5 rounded-3xl bg-[#130b24] border border-purple-500/25 text-center neon-border-purple">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300 mx-auto mb-1">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-2xl font-black text-white tabular-nums font-mono">{t.testimonials.stats.punctuality}</div>
            <div className="text-xs text-purple-300/80 mt-1">{t.testimonials.stats.punctualityLabel}</div>
          </div>

          <div className="p-5 rounded-3xl bg-[#130b24] border border-purple-500/25 text-center neon-border-purple">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 mx-auto mb-1">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-2xl font-black text-white tabular-nums font-mono">{t.testimonials.stats.counterTime}</div>
            <div className="text-xs text-purple-300/80 mt-1">{t.testimonials.stats.counterTimeLabel}</div>
          </div>
        </div>

        {/* Video Neon Skyline + Google Review Showcase & Button */}
        <div className="mb-14 rounded-3xl bg-[#140c26] border-2 border-purple-500/40 p-6 sm:p-8 overflow-hidden relative shadow-2xl neon-border-purple">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Embedded Neon Skyline Video (Col Span 6) */}
            <div className="lg:col-span-6 relative group rounded-2xl overflow-hidden border border-purple-400/40 shadow-[0_0_25px_rgba(192,132,252,0.3)]">
              <video
                src="https://res.cloudinary.com/hd1sahto/video/upload/v1793142044/Sports_car_neon_skyline_advertis__5b2ed2cb.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-purple-400/40 text-xs font-bold text-purple-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                <span>{t.testimonials.videoBadge}</span>
              </div>
            </div>

            {/* Google Reviews Callout & Button to Evaluate (Col Span 6) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-300" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">{t.testimonials.googleCallout.scoreBadge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {t.testimonials.googleCallout.titlePart1} <span className="text-purple-300 neon-glow-purple">{t.testimonials.googleCallout.titleGoogle}</span>
              </h3>

              <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
                {t.testimonials.googleCallout.desc}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                {/* Button to Evaluate on Google */}
                <button
                  onClick={() => setReviewModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold text-black bg-gradient-to-r from-amber-300 to-amber-400 hover:brightness-110 shadow-lg shadow-amber-400/20 transition-all cursor-pointer"
                >
                  <MessageSquarePlus className="w-4 h-4 fill-black/20" />
                  <span>{t.testimonials.googleCallout.evaluateBtn}</span>
                </button>

                <a
                  href="https://www.google.com/search?q=miami+fine+rental+car"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-purple-200 bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 transition-all cursor-pointer"
                >
                  <span>{t.testimonials.googleCallout.viewAllBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#130b24] border border-purple-500/25 hover:border-purple-400/50 transition-all flex flex-col justify-between neon-border-purple"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white font-bold flex items-center justify-center text-xs tracking-wider shadow-md">
                      {rev.avatarInitial}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{rev.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </h4>
                      <p className="text-xs text-purple-300/70">{rev.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-300">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-purple-100/90 text-sm leading-relaxed mb-4 italic">
                  "{rev.comment[currentLang]}"
                </p>
              </div>

              {/* Rented Car Footer in Review */}
              <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs text-purple-300/80">
                <span className="text-purple-300 font-bold">{rev.carRented}</span>
                <span className="font-mono text-purple-400/70">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Social Proof Gallery Banner */}
        <div className="rounded-3xl bg-[#140c26] border border-pink-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl neon-border-purple">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 flex items-center justify-center text-white shrink-0 shadow-lg">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                {t.testimonials.instagramBanner.title}
              </h4>
              <p className="text-purple-200/80 text-xs sm:text-sm mt-0.5">
                {t.testimonials.instagramBanner.desc} <span className="text-pink-300 font-bold">@miami_fine_rental</span>
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/miami_fine_rental/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:brightness-110 transition-all shrink-0 cursor-pointer shadow-md"
          >
            <Instagram className="w-4 h-4" />
            <span>{t.testimonials.instagramBanner.btn}</span>
          </a>
        </div>
      </div>

      {/* Review Modal - 100% Translated */}
      {reviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#130b24] border-2 border-purple-500/40 rounded-3xl p-6 shadow-2xl neon-border-purple text-purple-100">
            <button
              onClick={() => setReviewModalOpen(false)}
              className="absolute top-4 right-4 text-purple-300 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {reviewSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-400/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">{t.testimonials.reviewModal.thankYouTitle}</h4>
                <p className="text-xs text-purple-200/80">
                  {t.testimonials.reviewModal.thankYouDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-300 fill-amber-300" />
                  <span>{t.testimonials.reviewModal.title}</span>
                </h3>
                <p className="text-xs text-purple-200/80">
                  {t.testimonials.reviewModal.subtitle}
                </p>

                {/* Rating Stars */}
                <div>
                  <label className="block text-xs font-semibold text-purple-300 mb-1.5">{t.testimonials.reviewModal.ratingLabel}</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setUserRating(star)}
                        className="p-1 focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= userRating
                              ? 'text-amber-300 fill-amber-300'
                              : 'text-purple-900/60'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-purple-300 mb-1.5">{t.testimonials.reviewModal.nameLabel}</label>
                  <input
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder={t.testimonials.reviewModal.namePlaceholder}
                    className="w-full bg-[#1b1033] border border-purple-500/30 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-purple-300 mb-1.5">{t.testimonials.reviewModal.commentLabel}</label>
                  <textarea
                    required
                    rows={3}
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                    placeholder={t.testimonials.reviewModal.commentPlaceholder}
                    className="w-full bg-[#1b1033] border border-purple-500/30 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-purple-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-black bg-gradient-to-r from-amber-300 to-amber-400 hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.testimonials.reviewModal.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
