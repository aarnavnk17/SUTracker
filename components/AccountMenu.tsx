"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { AdminRole } from "@/lib/types";

const ROLE_LABELS: Record<AdminRole, string> = {
  super_admin: "Super admin",
  vertical_head: "Vertical head",
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

export function AccountMenu({
  displayName,
  role,
}: {
  displayName: string;
  role: AdminRole;
}) {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function toggle() {
    setOpen((o) => !o);
  }

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        onClick={toggle}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="account-menu"
        aria-label={`Account: ${displayName}`}
        className="flex size-8 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-ink-950 ring-brand-500/25 transition-[scale,box-shadow] duration-150 hover:ring-4 active:scale-90"
      >
        {initials(displayName)}
      </button>

      <div
        id="account-menu"
        className={`glass-panel absolute right-0 top-full mt-2 w-64 origin-top-right rounded-2xl p-1.5 transition-[opacity,scale,filter,visibility] duration-200 ease-out ${
          open
            ? "visible scale-100 opacity-100 blur-none"
            : "pointer-events-none invisible scale-95 opacity-0 blur-[2px]"
        }`}
      >
        <div className="px-3 pb-3 pt-2">
          <p className="truncate text-sm font-semibold text-body">{displayName}</p>
          <p className="text-xs text-muted">{ROLE_LABELS[role]}</p>
        </div>

        <div className="mx-2 h-px bg-line" />

        <button
          onClick={signOut}
          className="mt-1 w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-red-600 transition-colors hover:bg-red-500/10 dark:text-red-400"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
