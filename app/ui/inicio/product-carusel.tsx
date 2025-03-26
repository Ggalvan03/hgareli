"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { productos } from '@/app/lib/data';
import { Producto } from '@/app/lib/definitions';
import ProductCard from './producto-card';

type BouncingCard = {
    id: string;
    x: number;
    y: number;
    dx: number;
    dy: number;
    product: Producto;
};

export default function CartCarusel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rawSize, setRawSize] = useState({ width: 0, height: 0 }); // live size
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 }); // debounced size
    const [cards, setCards] = useState<BouncingCard[]>([]);
    const cardSize = 150;

    // 🔁 Step 1: Get live size
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                setRawSize({ width, height }); // live size
            }
        });

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    // 🕒 Step 2: Debounce the size update (wait 1s after last resize)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setContainerSize(rawSize); // update debounced size
        }, 1000);

        return () => clearTimeout(timeout);
    }, [rawSize]);

    // 🎯 Step 3: Initialize cards when debounced size changes
    useEffect(() => {
        if (containerSize.width === 0 || containerSize.height === 0) return;

        const shuffled = [...productos].sort(() => Math.random() - 0.5).slice(0, 10);
        const initialCards: BouncingCard[] = shuffled.map(product => ({
            id: product.id,
            x: Math.random() * (containerSize.width - cardSize),
            y: Math.random() * (containerSize.height - cardSize),
            dx: (Math.random() - 0.5) * 1,
            dy: (Math.random() - 0.5) * 1,
            product,
        }));

        setCards(initialCards);
    }, [containerSize]);

    // 🚀 Animation loop
    useEffect(() => {
        let animationFrame: number;

        const update = () => {
            setCards(prev =>
                prev.map(card => {
                    const { width, height } = containerSize;
                    let { x, y, dx, dy } = card;

                    x += dx;
                    y += dy;

                    if (x <= 0 || x + cardSize >= width) dx *= -1;
                    if (y <= 0 || y + cardSize >= height) dy *= -1;

                    return { ...card, x, y, dx, dy };
                })
            );

            animationFrame = requestAnimationFrame(update);
        };

        animationFrame = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationFrame);
    }, [containerSize]);

    return (
        <div ref={containerRef} className="relative w-full h-full overflow-hidden">
            {cards.map(card => (
                <motion.div
                    key={card.id}
                    style={{
                        position: 'absolute',
                        top: card.y,
                        left: card.x,
                        width: cardSize,
                        height: cardSize,
                    }}
                >
                    <ProductCard product={card.product} />
                </motion.div>
            ))}
        </div>
    );
}