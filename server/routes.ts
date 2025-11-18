import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.status(201).json(inquiry);
    } catch (error: any) {
      if (error.name === "ZodError") {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Failed to submit contact inquiry" 
        });
      }
    }
  });

  // Get all contact inquiries (optional - for admin/debugging)
  app.get("/api/contact", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      const inquiries = category
        ? await storage.getContactInquiriesByCategory(category)
        : await storage.getAllContactInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to retrieve contact inquiries" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
