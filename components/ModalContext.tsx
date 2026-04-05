'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface ModalCtx { open: boolean; openModal: () => void; closeModal: () => void }
const Ctx = createContext<ModalCtx>({ open: false, openModal: () => {}, closeModal: () => {} })

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <Ctx.Provider value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}>
      {children}
    </Ctx.Provider>
  )
}

export const useModal = () => useContext(Ctx)
