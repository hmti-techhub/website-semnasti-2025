"use client";
import React from "react";

const TALLY_URL = "https://tally.so/r/wkVgre";

export default function TallyFullPage() {
    return (
        <div className="fixed inset-0 z-50 bg-transparent">
            <iframe
                src={TALLY_URL}
                title="SEMNASTI 2025 #EARLYBIRD"
                className="w-full h-full border-0"
                style={{ display: "block" }}
                loading="lazy"
                allow="fullscreen; clipboard-write"
            />
        </div>
    );
}
