import React from "react";
import { clerkClient } from "@clerk/nextjs/server";
import { db } from "@/db";
import { blogTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

interface Params {
  subdomain: string;
}

const Page = async ({ params }: { params: Promise<Params> }) => {
  const { subdomain } = await params;

  const client = await clerkClient();
  const org = await client.organizations.getOrganization({ slug: subdomain });
  const orgID = org.id;

  const blogs = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.orgId, orgID));

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          {org.name} Blog Posts
        </h1>

        {blogs.length === 0 ? (
          <p className="text-gray-600 text-center">No blog posts found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-700">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{blog.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
