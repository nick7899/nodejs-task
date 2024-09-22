const Ticket = require('../models/ticket');

// Create a new ticket
const createTicket = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTicket = new Ticket({ title, description });
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all tickets
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get ticket by ID
const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a ticket by ID
const updateTicket = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { title, description, status, updatedAt: Date.now() },
      { new: true }
    );
    if (!updatedTicket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    res.status(200).json(updatedTicket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a ticket by ID
const deleteTicket = async (req, res) => {
  try {
    const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);
    if (!deletedTicket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    res.status(200).json({ message: 'Ticket deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTicket, getTickets, getTicketById, updateTicket, deleteTicket };
