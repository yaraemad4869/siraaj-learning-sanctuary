type IslamicDecorProps = {
    /** 'color' للأقسام الفاتحة، 'light' للأقسام الداكنة */
    tone?: 'color' | 'light'
}

/** زخارف هندسية إسلامية تتحرك ببطء خلف محتوى الصفحة. */
export default function IslamicDecor({ tone = 'color' }: IslamicDecorProps) {
    return (
        <div className={`decor-layer${tone === 'light' ? ' decor-light' : ''}`} aria-hidden="true">
            <svg viewBox="0 0 100 100" className="decor-star decor-star-a">
                <rect x="24" y="24" width="52" height="52" rx="7" />
                <rect x="24" y="24" width="52" height="52" rx="7" transform="rotate(45 50 50)" />
                <circle cx="50" cy="50" r="9" />
                <circle cx="50" cy="50" r="2.5" />
            </svg>
            <svg viewBox="0 0 100 100" className="decor-star decor-star-b">
                <rect x="24" y="24" width="52" height="52" rx="7" />
                <rect x="24" y="24" width="52" height="52" rx="7" transform="rotate(45 50 50)" />
            </svg>
            <span className="decor-char decor-char-a">۞</span>
            <svg viewBox="0 0 100 100" className="decor-star decor-star-c">
                <rect x="28" y="28" width="44" height="44" transform="rotate(22.5 50 50)" />
                <rect x="28" y="28" width="44" height="44" transform="rotate(67.5 50 50)" />
                <circle cx="50" cy="50" r="5" />
            </svg>
        </div>
    )
}
