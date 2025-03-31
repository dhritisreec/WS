import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import { sendContactEmail } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // We don't need a resume API endpoint since we're linking directly to Google Drive

  // Contact form submission API
  app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields' 
      });
    }
    
    try {
      // Send email using the email service
      const emailSent = await sendContactEmail({
        name,
        email,
        subject: subject || 'Message from Portfolio Contact Form',
        message
      });
      
      if (emailSent) {
        console.log('Contact form email sent successfully.');
        return res.status(200).json({
          success: true,
          message: 'Your message has been sent. Thank you for reaching out!'
        });
      } else {
        console.error('Failed to send contact form email.');
        return res.status(500).json({
          success: false,
          message: 'There was an error sending your message. Please try again later.'
        });
      }
    } catch (error) {
      console.error('Error handling contact form submission:', error);
      return res.status(500).json({
        success: false,
        message: 'There was an error processing your request. Please try again later.'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
