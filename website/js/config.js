/**
 * $File: config.js $
 * $Date: 2018-09-28 22:33:54 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */

"use strict";

/********************* Client Config *************************/

// Manual config.
const manual_name = "[Manual Name]";
const version_manual = "0.0.1";

// Copyright text to show on the website.
const copyright_text = "Copyright © [yyyy] [Group Name]. Built: [yyyy-mm-dd].";

// Default content page.
const intro_content = 'intro';

// Content extension to load.
//
// NOTE(jenchieh): have to be the same with 'server' side's
// config file.
//
// SEE : confid.js in the project root directory.
const content_extension = '.html';


/********************* Server Config *************************/

const host = 'localhost';
const port = 3000;
