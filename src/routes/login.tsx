import { createFileRoute } from "@tanstack/react-router";
import Login from "../siraaj/pages/Login";

export const Route = createFileRoute("/login")({
    head: () => ({
        meta: [
            { title: "تسجيل الدخول | سِراج" },
            { name: "description", content: "سجّل دخولك إلى حسابك في منصة سِراج لمتابعة حلقاتك واشتراكك." },
            { property: "og:title", content: "تسجيل الدخول | سِراج" },
            { property: "og:description", content: "ادخل إلى حسابك في منصة سِراج." },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
    }),
    component: Login,
});
