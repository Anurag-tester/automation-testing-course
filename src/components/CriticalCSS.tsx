'use client'

export default function CriticalCSS() {
  return (
    <style jsx>{`
      .critical-layout {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      .critical-main {
        flex: 1;
      }
      .loading-spinner {
        width: 2rem;
        height: 2rem;
        border: 2px solid #e5e7eb;
        border-top: 2px solid #2563eb;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  )
}