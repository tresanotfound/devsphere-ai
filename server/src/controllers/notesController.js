// server/src/controllers/notesController.js

import Note from "../models/Note.js";



/* =========================================
   CREATE NOTE
========================================= */

export const createNote = async (

  req,
  res

) => {

  try {

    const {

      title,
      content,
      tags,

    } = req.body;

    const note = await Note.create({

      title,
      content,
      tags,

      createdBy: req.user._id,

    });

    res.status(201).json({

      success: true,

      message:
        "📝 Note created successfully",

      note,

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }
};



/* =========================================
   GET USER NOTES
========================================= */

export const getNotes = async (

  req,
  res

) => {

  try {

    const notes = await Note.find({

      createdBy: req.user._id,

      archived: false,

    })

      .sort({

        pinned: -1,
        updatedAt: -1,

      });

    res.status(200).json({

      success: true,

      count: notes.length,

      notes,

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }
};



/* =========================================
   UPDATE NOTE
========================================= */

export const updateNote = async (

  req,
  res

) => {

  try {

    const note = await Note.findById(

      req.params.id
    );

    if (!note) {

      return res.status(404).json({

        success: false,
        message: "Note not found",

      });

    }

    // SECURITY CHECK

    if (

      note.createdBy.toString()

      !==

      req.user._id.toString()

    ) {

      return res.status(401).json({

        success: false,
        message: "Unauthorized",

      });

    }

    const updatedNote =
      await Note.findByIdAndUpdate(

        req.params.id,

        {

          ...req.body,

          lastEditedAt:
            Date.now(),

        },

        {

          new: true,
          runValidators: true,

        }
      );

    res.status(200).json({

      success: true,

      message:
        "✏️ Note updated successfully",

      note: updatedNote,

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }
};



/* =========================================
   DELETE NOTE
========================================= */

export const deleteNote = async (

  req,
  res

) => {

  try {

    const note = await Note.findById(

      req.params.id
    );

    if (!note) {

      return res.status(404).json({

        success: false,
        message: "Note not found",

      });

    }

    // SECURITY CHECK

    if (

      note.createdBy.toString()

      !==

      req.user._id.toString()

    ) {

      return res.status(401).json({

        success: false,
        message: "Unauthorized",

      });

    }

    await note.deleteOne();

    res.status(200).json({

      success: true,

      message:
        "🗑️ Note deleted successfully",

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }
};



/* =========================================
   PIN / UNPIN NOTE
========================================= */

export const togglePinNote = async (

  req,
  res

) => {

  try {

    const note = await Note.findById(

      req.params.id
    );

    if (!note) {

      return res.status(404).json({

        success: false,
        message: "Note not found",

      });

    }

    // SECURITY CHECK

    if (

      note.createdBy.toString()

      !==

      req.user._id.toString()

    ) {

      return res.status(401).json({

        success: false,
        message: "Unauthorized",

      });

    }

    note.pinned =
      !note.pinned;

    await note.save();

    res.status(200).json({

      success: true,

      message:
        note.pinned

          ? "📌 Note pinned"

          : "📍 Note unpinned",

      note,

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }
};