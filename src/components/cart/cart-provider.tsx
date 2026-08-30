'use client';
import {createContext,useContext,useEffect,useMemo,useState,ReactNode} from 'react';
import type {Product} from '@/data/products';
const Ctx=createContext<any>(null);
export function CartProvider({children}:{children:ReactNode}){const [items,setItems]=useState<{product:Product;qty:number}[]>([]);useEffect(()=>{try{setItems(JSON.parse(localStorage.getItem('elvora-cart')||'[]'))}catch{}},[]);useEffect(()=>{localStorage.setItem('elvora-cart',JSON.stringify(items))},[items]);const add=(product:Product)=>setItems(x=>{const hit=x.find(i=>i.product.id===product.id);return hit?x.map(i=>i.product.id===product.id?{...i,qty:i.qty+1}:i):[...x,{product,qty:1}]});const remove=(id:string)=>setItems(x=>x.filter(i=>i.product.id!==id));const setQty=(id:string,qty:number)=>setItems(x=>qty<1?x.filter(i=>i.product.id!==id):x.map(i=>i.product.id===id?{...i,qty}:i));const count=items.reduce((s,i)=>s+i.qty,0),subtotal=items.reduce((s,i)=>s+i.qty*i.product.price,0);return <Ctx.Provider value={{items,add,remove,setQty,count,subtotal}}>{children}</Ctx.Provider>}
export const useCart=()=>useContext(Ctx);
