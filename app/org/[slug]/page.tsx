"use client";

import Nav from "@/app/components/nav"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import { Input } from "@/components/ui/input";


export default function OrgLandingPage(){

    const [blogContent, setBlogContent] = useState('')
    const [blogTitle, setBlogTitle] = useState('')

    return (
        <main>
            <Nav />
            <div className="p-10">
                <Input onChange={(e)=>setBlogTitle(e.target.value)} value={blogTitle} placeholder="Enter Blog title"/>

                <Textarea className="mt-2" placeholder="Enter you blog content" onChange={(e)=>setBlogContent(e.target.value)} value={blogContent}/>
                    
                <Button className="mt-2">Create a Blog</Button>
            </div>
        </main>
    )
}