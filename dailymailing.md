# 🎨 DailyShipUI: The 100-Day AI-Native Design Studio

**Vision:** Leave the static canvases of Figma behind. Step into the role of an **AI-Native Art Director**. You won’t write a single line of code; instead, you will sculpt living, breathing user interfaces by conversing with AI. You will focus entirely on user psychology, visual hierarchy, and interaction design.
**Stack:** Cursor IDE + Pencil Extension. (Zero coding, zero local servers, zero terminal commands).
**Domain:** dailyshipui.com

## 🧠 Core Curriculum Pillars
1. **Problem Solving (UX):** Moving beyond "making it look pretty" to actively healing user pain points through empathetic design.
2. **Prompt Crafting:** Directing the AI like a Senior Designer—using words to shape shadows, spacing, typography, and motion.
3. **Design Iteration:** Acting as a sculptor. You will chip away at the AI's generic first draft to reveal a refined, bespoke, and premium experience.
4. **AI-Driven Design System:** Teaching the AI your recurring aesthetic so it learns your unique "brand voice" over time.

---

## 🛠 DAY 0: The Studio Setup (Absolute Zero Friction)
Today, we set up your canvas. No developer tools, no environments. Just a blank slate and an AI assistant.

1. **The Studio:** Download and install [Cursor](https://cursor.com/). Think of this as your new, intelligent design canvas.
2. **The Brush:** Open Cursor. Click the **Extensions** icon (four squares) on the left sidebar. Search for **Pencil**, install it, and log in.
3. **The Canvas:** Create an empty folder on your desktop named `DailyShipUI`. Open it in Cursor via `File > Open Folder`.
4. **The First Stroke:** Open the Pencil chat and type: *"I am a designer. Create a blank preview canvas for me. Design a softly shadowed button in the center of the screen that says 'Studio Ready'."* 
If you see the button render in your preview window, your 100-day journey has begun!

---

## 🏗 PHASE 1: First Contact & Micro-Interactions (Days 1-10)
*Focus: Establishing immediate trust and reducing cognitive load in the first seconds of user interaction.*

### Day 1: The Focused Login Screen
* **UX Problem:** Cluttered forms overwhelm the user and kill conversion rates.
* **Initial Prompt:** "Design a highly minimalist login screen with only an email input and a 'Continue' button."
* **Your Art Direction:** "Add a subtle, glowing aura around the input field when the user clicks it. Make the button look visually muted and unclickable until a valid email is typed."
* **Acceptance Criteria (AC):** [ ] No password field visible initially. [ ] The button clearly communicates a disabled state.

### Day 2: The Blameless Error Message
* **UX Problem:** Pure red error messages induce anxiety and feel like the system is yelling at the user.
* **Initial Prompt:** "Design a password input field that shows an error state."
* **Your Art Direction:** "Soften the red to a gentle pastel coral. When the error triggers, add a subtle 'head-shake' animation to the input box. Use empathetic microcopy like 'Hmm, that password looks a bit short.'"
* **AC:** [ ] Avoid aggressive primary red. [ ] The error text should guide, not scold.

### Day 3: The Tactile Primary Button
* **UX Problem:** Flat, unresponsive buttons make the interface feel dead.
* **Initial Prompt:** "Design a primary call-to-action button."
* **Your Art Direction:** "When the user hovers over the button, make it physically lift off the canvas slightly. Add a rich, diffused drop-shadow beneath it. Ensure this motion feels fluid and organic, not snappy."
* **AC:** [ ] The button must feel like a tangible, physical object.

### Day 4: The Out-of-Stock State
* **UX Problem:** Buttons that look active but lead to dead ends destroy shopping momentum.
* **Initial Prompt:** "Design an 'Add to Cart' button with an 'Out of Stock' state."
* **Your Art Direction:** "Drain all the color from the button, leaving a flat, dusty gray. Change the mouse cursor to a 'not-allowed' symbol. Add a delicate strike-through line across the product price."
* **AC:** [ ] The out-of-stock state must look completely inert and unclickable.

### Day 5: Password Strength Progress
* **UX Problem:** Users need visual feedback on security without reading a boring list of rules.
* **Initial Prompt:** "Design a password input with a progress bar below it indicating strength."
* **Your Art Direction:** "Create a smooth color transition: start with a warning orange, melt into yellow, and finish with a vibrant, reassuring green. The bar must fill up fluidly as the user types, mimicking a liquid filling a tube."
* **AC:** [ ] Color transitions must be animated. [ ] The bar must reflect real-time typing rhythm.

### Day 6: Password Visibility Toggle
* **UX Problem:** Blind typing on mobile devices causes typos and frustrating account lockouts.
* **Initial Prompt:** "Design a password input containing an eye icon to reveal the text."
* **Your Art Direction:** "When the eye is clicked, animate a diagonal slash drawing itself over the icon. Fade the icon slightly into the background when the password is hidden, and make it fully opaque when revealed."
* **AC:** [ ] Clicking must toggle the input between plain text and hidden dots.

### Day 7: User Avatar Fallback
* **UX Problem:** Broken image links or generic silhouette icons look highly unprofessional.
* **Initial Prompt:** "Design a user profile component with a circular avatar."
* **Your Art Direction:** "If the user hasn't uploaded a photo, extract their first and last initials, center them perfectly, and place them on a soft, dynamically generated pastel background color."
* **AC:** [ ] Initials must display cleanly if no image exists. [ ] The avatar must remain a perfect circle.

### Day 8: Proactive Character Counter
* **UX Problem:** Discovering character limits only after hitting 'Submit' causes intense frustration.
* **Initial Prompt:** "Design a textarea with a 150-character limit and a counter."
* **Your Art Direction:** "Make the counter text turn a cautious yellow at 130 characters, and a critical red at 150. If they try to over-type, make the counter text pulse gently to warn them."
* **AC:** [ ] The visual warning must trigger proactively before the limit is hit.

### Day 9: The Skeleton Loading State
* **UX Problem:** Staring at a blank white screen during data fetch makes the app feel slow.
* **Initial Prompt:** "Design a skeleton loading state for a news article card."
* **Your Art Direction:** "Replace text with soft gray placeholder blocks. Add a slow, breathing, left-to-right shimmer effect across the blocks. It should feel calming, not frantic."
* **AC:** [ ] The skeleton must accurately mimic the layout of the actual content.

### Day 10: Pricing Table Hierarchy
* **UX Problem:** Presenting too many equal choices without a clear recommendation causes decision paralysis.
* **Initial Prompt:** "Design a pricing table featuring 3 subscription tiers."
* **Your Art Direction:** "Physically scale up the middle 'Pro' tier so it stands taller. Give it a deep, pronounced drop shadow. Add a vibrant 'Most Popular' ribbon. Mute the buttons on the adjacent cards to simple, hollow outlines."
* **AC:** [ ] The recommended tier must instantly capture the eye.

---

## 🧠 PHASE 2: Easing Cognitive Load (Days 11-20)
*Focus: Helping the user filter, search, and navigate data without feeling overwhelmed.*

### Day 11: Filter Chips
* **UX Problem:** Using long, vertical dropdowns for horizontal categories increases interaction friction.
* **Initial Prompt:** "Design a row of pill-shaped buttons for category filtering."
* **Your Art Direction:** "Fill the selected chip with our primary brand color and crisp white text. Keep inactive chips as subtle, airy outlines. Hide the scrollbars for a clean look, but allow the user to swipe through them."
* **AC:** [ ] The container must be horizontally swipeable.

### Day 12: Dual-Thumb Range Slider
* **UX Problem:** Forcing users to type minimum and maximum prices on mobile keyboards is tedious.
* **Initial Prompt:** "Design a horizontal range slider with two thumbs."
* **Your Art Direction:** "Make the thumbs feel tangible by slightly enlarging them when grabbed. Color the track between the thumbs brightly, leaving the outer track a muted gray. Ensure the thumbs cannot physically cross each other."
* **AC:** [ ] Thumbs must be large enough to easily grab on a touch screen.

### Day 13: Debounced Search Bar
* **UX Problem:** Flashing layout shifts on every single keystroke causes eye strain.
* **Initial Prompt:** "Design a wide search bar with a 'Searching...' state."
* **Your Iteration:** "Make the search icon slightly swell on focus. Have the 'Searching...' text and a tiny spinning loader fade in smoothly, but only after the user pauses typing for a brief moment."
* **AC:** [ ] The loading indicator must appear thoughtfully, not erratically on every key press.

### Day 14: Empathetic Empty State
* **UX Problem:** A blank screen on "No Results" feels like a dead end.
* **Initial Prompt:** "Design a friendly 'No Results Found' screen featuring an icon."
* **Your Art Direction:** "Desaturate the icon to a calming, soft gray. Center the composition perfectly. Add inviting CTA buttons below the text saying 'Try searching for these popular categories instead'."
* **AC:** [ ] The screen must include an alternative path forward.

### Day 15: Delete Action & Undo (Toast)
* **UX Problem:** Permanent, accidental deletions without a safety net destroy user trust.
* **Initial Prompt:** "Design a list row. When the delete button is clicked, the row disappears."
* **Your Art Direction:** "When the row vanishes, slide up an elegant, dark pill-shaped notification from the bottom saying 'Item Deleted'. Include a bright, clickable 'Undo' text inside it that lasts exactly 5 seconds."
* **AC:** [ ] The Undo action must be clearly visible and accessible.

### Day 16: Intuitive File Drop Zone
* **UX Problem:** Users often don't know exactly where a file can be dropped.
* **Initial Prompt:** "Design a dashed-border area for file uploads."
* **Your Art Direction:** "When a file is hovered over the zone, shift the background to an inviting, translucent blue tint. Thicken the dashed borders and change the central text to 'Drop it right here'."
* **AC:** [ ] A distinct visual change must occur specifically on the 'drag over' state.

### Day 17: Multi-Step Stepper
* **UX Problem:** Users abandon long forms when they have no visual progression map.
* **Initial Prompt:** "Design a horizontal step indicator (Personal, Shipping, Payment)."
* **Your Art Direction:** "Place a solid green checkmark on completed steps. Highlight the active step with a glowing brand color. Animate the connecting lines filling up smoothly from left to right as the user progresses."
* **AC:** [ ] Completed, active, and pending steps must be visually distinct at a glance.

### Day 18: Table Hover Actions
* **UX Problem:** Repeating 'Edit' and 'Delete' buttons on every single row creates massive visual noise.
* **Initial Prompt:** "Design a standard row for a data table."
* **Your Art Direction:** "Hide the action icons completely by default. Reveal them gently fading in on the far right edge *only* when the mouse hovers over that specific row. Darken the row background slightly to indicate focus."
* **AC:** [ ] Action buttons must not clutter the default view.

### Day 19: Breadcrumb Navigation
* **UX Problem:** Users get lost in deep navigation hierarchies.
* **Initial Prompt:** "Design a breadcrumb navigation: Home > Category > Product."
* **Your Art Direction:** "Make the current page bold and dark gray. Make previous steps muted, light gray links that underline only when hovered over. Use a delicate '/' icon as a separator."
* **AC:** [ ] The current/final element must not look like a clickable link.

### Day 20: Accordion Menu (FAQ)
* **UX Problem:** Displaying long FAQ text inline makes the page impossible to scan.
* **Initial Prompt:** "Design a Q&A box that expands downwards when clicked."
* **Your Art Direction:** "Animate the '+' icon smoothly rotating into an 'x'. Ensure the answer text slides down smoothly, like a drawer opening, pushing the content below it down naturally."
* **AC:** [ ] Opening one accordion should automatically close the others.

---

## 🧭 PHASE 3: Complex Inputs & Forms (Days 21-30)
*Focus: Refining the data entry experience to prevent errors and reduce typing effort.*

### Day 21: Dynamic Tag Input
* **UX Problem:** Expecting users to type comma-separated values is archaic.
* **Initial Prompt:** "Design an input field where pressing Enter converts the typed word into a tag."
* **Your Art Direction:** "Turn the tags into soft, rounded chips with a delicate background tint. Add a small 'x' icon. When the 'x' is clicked, shrink the tag out of existence gracefully."
* **AC:** [ ] Added tags must be individually removable.

### Day 22: Phone Number Auto-Formatting
* **UX Problem:** Formatting country codes and spaces manually leads to database inconsistencies.
* **Initial Prompt:** "Design a phone number input field with a country code selector."
* **Your Art Direction:** "Auto-format the numbers rhythmically as the user types (e.g., '(555) 555-5555'). Add a crisp flag icon that updates instantly based on the selected country code."
* **AC:** [ ] Digits must group automatically without user effort.

### Day 23: Multi-select Dropdown
* **UX Problem:** Standard dropdowns close after one click, causing frustration for multiple selections.
* **Initial Prompt:** "Design a dropdown menu containing checkboxes for multiple selections."
* **Your Art Direction:** "Keep the dropdown open while internal checkboxes are clicked. Summarize the selection count with a neat, colored badge on the closed dropdown trigger."
* **AC:** [ ] The menu must not close automatically upon selecting an item.

### Day 24: Radio Cards
* **UX Problem:** Tiny circular radio buttons are a nightmare for mobile tap targets.
* **Initial Prompt:** "Design large, clickable cards for selecting a payment method."
* **Your Art Direction:** "When a card is selected, highlight it with a bold, brand-colored stroke and place a green checkmark icon in the top right corner. Make the entire card a clickable zone."
* **AC:** [ ] The entire card must act as a label for the selection.

### Day 25: Visual Datepicker
* **UX Problem:** Manual date entry leads to endless formatting errors.
* **Initial Prompt:** "Design a pop-up calendar datepicker."
* **Your Art Direction:** "Highlight the selected day with a solid colored circle. Make 'Today' bold. Visually disable past dates by fading them out so they cannot be clicked."
* **AC:** [ ] Past dates must be unclickable.

### Day 26: Date Range Picker
* **UX Problem:** Selecting departure and return dates sequentially lacks visual flow.
* **Initial Prompt:** "Design an interface for selecting a start and end date on a calendar."
* **Your Art Direction:** "Connect the start and end dates by laying down a continuous, soft blue ribbon behind all the intermediate days. Round the outer edges of this ribbon."
* **AC:** [ ] The days between the selection bounds must be visually highlighted as a block.

### Day 27: iOS-Style Switch (Toggle)
* **UX Problem:** Standard checkboxes fail to convey an instant "system on/off" status.
* **Initial Prompt:** "Design an iOS-style toggle switch for turning notifications on and off."
* **Your Art Direction:** "Smoothly transition the background from a muted gray to a vibrant green when activated. Make the thumb's sliding motion fluid, like a physical, well-oiled switch."
* **AC:** [ ] State changes must be animated, not instantaneous.

### Day 28: Auto-expanding Textarea
* **UX Problem:** Inner scrollbars appearing while typing long text trap the user's focus.
* **Initial Prompt:** "Design a textarea for writing long reviews."
* **Your Art Direction:** "Ensure that as the user types and hits a new line, the box breathes and expands downwards naturally to fit the text, up to a reasonable limit."
* **AC:** [ ] The box must stretch vertically rather than trapping the user in a scrollable frame.

### Day 29: File Upload Progress Bar
* **UX Problem:** System silence during large file uploads makes users think the app froze.
* **Initial Prompt:** "Design a progress bar indicating a file upload."
* **Your Art Direction:** "Design a satisfying fill animation. Overlay a text counter (e.g., 'Uploading... 45%'). Transition the bar to a reassuring, solid green upon completion."
* **AC:** [ ] The progress bar width must fill dynamically.

### Day 30: Image Cropper UI
* **UX Problem:** Uploaded avatars get stretched without in-app cropping tools.
* **Initial Prompt:** "Design an interface where the user can crop their uploaded profile picture."
* **Your Art Direction:** "Place a circular, transparent mask over the image. Dim the rejected outer areas significantly to focus the user's eye entirely on the crop zone."
* **AC:** [ ] Only the active crop area should remain fully illuminated.

---

## 📱 PHASE 4: Mobile Ergonomics (Days 31-40)
*Focus: Designing for thick thumbs, limited screen space, and tactile, frictionless interactions.*

### Day 31: Bottom Navigation Bar
* **UX Problem:** Top-left hamburger menus are completely unreachable on modern smartphones.
* **Initial Prompt:** "Design a 4-icon bottom navigation bar fixed to the bottom."
* **Your Art Direction:** "Scale up the active icon slightly and place an elegant indicator dot beneath it. Ensure the touch targets are generously spaced for thumb-friendly zones."
* **AC:** [ ] The bar must be fixed to the bottom edge.

### Day 32: Floating Action Button (FAB)
* **UX Problem:** The primary call-to-action gets lost among secondary menu items on mobile screens.
* **Initial Prompt:** "Design a large '+' button centered on the bottom navigation, overflowing the bar."
* **Your Art Direction:** "Make the button float above the interface by casting a rich, heavy shadow. Give it a subtle breathing (pulse) animation when the page first loads."
* **AC:** [ ] The button must visually pop out of the standard navigation.

### Day 33: Swipe-to-Delete
* **UX Problem:** Opening a context menu just to delete an item takes too many precise taps.
* **Initial Prompt:** "Design a mobile list row that can be swiped to the left."
* **Your Art Direction:** "As the user swipes left, reveal a bright red background. The white 'Trash' icon inside it should scale up the further they swipe, adding a springy, physical resistance to the drag."
* **AC:** [ ] The swipe interaction must reveal the destructive action contextually.

### Day 34: Slide-over Drawer (Mobile Menu)
* **UX Problem:** Full-screen modals completely block the context of the underlying page.
* **Initial Prompt:** "Design a panel that slides in from the right edge of the screen."
* **Your Art Direction:** "Dim the background page to create focus on the drawer. Make the drawer slide in gracefully. Clicking the dimmed area must instantly close the drawer."
* **AC:** [ ] The drawer must include a clear way to dismiss it.

### Day 35: Responsive Hamburger Transition
* **UX Problem:** Desktop navbars overflow and break mobile screens if not handled gracefully.
* **Initial Prompt:** "Design the transition of a desktop navbar into a mobile hamburger menu."
* **Your Art Direction:** "Upon tapping the hamburger icon, do not just drop a menu down. Instead, slide the menu over gracefully from the right edge, acting as an isolated drawer."
* **AC:** [ ] The breakpoint transition between desktop and mobile must be flawless.

### Day 36: Sticky Action Bar
* **UX Problem:** Users lose sight of the primary action on long mobile scrolling pages.
* **Initial Prompt:** "Design an action bar that sticks to the bottom of the screen."
* **Your Art Direction:** "Tuck the bar away initially. Trigger a smooth slide-up animation to reveal it *only* after the user scrolls past the main hero section."
* **AC:** [ ] The bar must remain visible during deep scrolls.

### Day 37: Full-Screen Search Modal
* **UX Problem:** Tiny search inputs on mobile lead to typos and a cramped feeling.
* **Initial Prompt:** "Design a search input that expands into a full-screen mobile modal when tapped."
* **Your Art Direction:** "Take over the screen for maximum focus. Auto-focus the keyboard immediately and show 'Recent Searches' in a clean list below the input."
* **AC:** [ ] The search experience must maximize typing space.

### Day 38: Pull-to-Refresh Indicator
* **UX Problem:** Refreshing mobile content needs a tactile, native feel.
* **Initial Prompt:** "Design a pull-to-refresh spinner sitting above a list."
* **Your Art Direction:** "Tie the spinner's rotation to the tactile resistance of the thumb's drag. When released, snap it into a smooth infinite spin until data loads."
* **AC:** [ ] The interaction must feel tied to the user's touch physics.

### Day 39: Context Menu (Long Press)
* **UX Problem:** Mobile screen space is too limited for persistent edit/share buttons.
* **Initial Prompt:** "Design a context menu that appears over a card."
* **Your Art Direction:** "Blur the background like frosted glass to isolate the card. Pop the menu open with a spring animation right next to where the user tapped."
* **AC:** [ ] The menu must feel like it floats above the content.

### Day 40: Mobile Notification Toast (Pill)
* **UX Problem:** Top-down, wide alerts are hard to reach and dismiss on tall mobile screens.
* **Initial Prompt:** "Design a pill-shaped toast notification that floats at the top of the mobile screen."
* **Your Art Direction:** "Make it a floating pill with a deep shadow. Allow the user to simply flick the toast upwards to dismiss it manually."
* **AC:** [ ] The toast must be compact, rounded, and non-obstructive.

---

## 🛍 PHASE 5: E-commerce & Conversion (Days 41-50)
*Focus: Removing friction from the buying process and guiding the eye.*

### Day 41: The Perfect Product Card
* **UX Problem:** Information overload on product cards hides the primary call to action.
* **Initial Prompt:** "Design a product card featuring an image, title, price, and CTA."
* **Your Art Direction:** "Let the product image breathe with ample padding. Make the price bolder and larger than the title. Hide the 'Add to Cart' button so it only glides up on hover."
* **AC:** [ ] The price must command higher visual hierarchy than the product title.

### Day 42: Discount Badge
* **UX Problem:** Discounted products blend in with standard items.
* **Initial Prompt:** "Design a discount badge overlay for a product card."
* **Your Art Direction:** "Create a high-contrast, punchy label in the top-left corner. Use a bold red background and crisp white text saying '20% OFF'."
* **AC:** [ ] The badge must overlay the image without breaking the card's layout.

### Day 43: Image Carousel / Slider
* **UX Problem:** Forcing users to click tiny thumbnails to view multiple angles is exhausting.
* **Initial Prompt:** "Design a product image gallery with left and right navigation arrows."
* **Your Art Direction:** "Place subtle, circular pagination dots at the bottom of the image. Fade the navigation arrows out completely when the mouse is not hovering over the image."
* **AC:** [ ] Clicking arrows must slide the images horizontally with a smooth transition.

### Day 44: Color Swatch Selection
* **UX Problem:** Text-based color selection lacks visual affordance.
* **Initial Prompt:** "Design color and size selection components for a product."
* **Your Art Direction:** "Replace text colors with tangible color circles filled with actual hex codes. Highlight the active swatch with a distinct outer ring."
* **AC:** [ ] The selected color swatch must be instantly identifiable.

### Day 45: Sticky Cart Summary
* **UX Problem:** Users scrolling through long product descriptions lose sight of the 'Buy' button.
* **Initial Prompt:** "Design an 'Add to Cart' bar that sticks to the top of the screen when scrolling."
* **Your Art Direction:** "Keep the bar hidden initially. Make it glide down smoothly from the top *only* after the user scrolls past the original 'Buy' button."
* **AC:** [ ] The bar must remain visible during deep scrolls.

### Day 46: Slide-over Cart (Drawer)
* **UX Problem:** Navigating away to a completely separate cart page disrupts the shopping flow.
* **Initial Prompt:** "Design a cart summary drawer that slides in from the right edge of the screen."
* **Your Art Direction:** "Keep the user in the shopping flow by dimming the main page. Lock a massive, high-contrast 'Checkout' button to the bottom of the drawer."
* **AC:** [ ] The drawer must include a clear close icon.

### Day 47: Quantity Stepper (+ / -)
* **UX Problem:** Forcing users to tap an input and type numbers on a mobile keyboard adds severe friction.
* **Initial Prompt:** "Design minus, number, and plus buttons for adjusting item quantity."
* **Your Art Direction:** "When the quantity reaches 1, visually disable the minus button (grayed out and flat) to prevent confusion and accidental negative values."
* **AC:** [ ] The minus button must be inactive at a quantity of 1.

### Day 48: Order Summary Transparency
* **UX Problem:** Hidden costs revealed at the last second cause instant cart abandonment.
* **Initial Prompt:** "Design an invoice summary card showing subtotal, shipping, discount, and total."
* **Your Art Direction:** "Make the Grand Total massive and bold. Color the discount amount green to make the savings feel like a victory."
* **AC:** [ ] The Grand Total must hold the highest visual hierarchy.

### Day 49: Inline Promo Code Input
* **UX Problem:** Opening a separate modal for promo codes distracts the user from paying.
* **Initial Prompt:** "Design an input field and an 'Apply' button for promo codes."
* **Your Art Direction:** "Nest the 'Apply' button directly inside the right edge of the input field to create a unified, space-saving component."
* **AC:** [ ] Real-time visual feedback must be provided upon application.

### Day 50: Checkout Success Delight
* **UX Problem:** A bland success screen misses the opportunity to establish brand delight.
* **Initial Prompt:** "Design a screen displaying an 'Order Successfully Placed' message."
* **Your Art Direction:** "Center a large green checkmark. Create radiating ripples of delight (expanding circular borders) expanding outward from the icon. Provide a clear 'Track Order' button."
* **AC:** [ ] The order number must be clearly visible and easy to copy.

---

## 💬 PHASE 6: Messaging & Social UX (Days 51-60)
*Focus: Creating readable, organized, and engaging communication interfaces.*

### Day 51: Distinct Chat Bubbles
* **UX Problem:** Indistinguishable sender and receiver messages make threads unreadable.
* **Initial Prompt:** "Design two chat bubbles facing each other: one sent, one received."
* **Your Art Direction:** "Color the user's sent bubble with the brand color. Round the corners generously, but leave the bottom-right corner sharp to indicate voice direction."
* **AC:** [ ] Sent and received messages must be distinctly separated by color and shape.

### Day 52: Typing Indicator
* **UX Problem:** Absolute silence while the other person is typing causes users to abandon the chat.
* **Initial Prompt:** "Design a 'Typing...' animation indicating the other party is writing."
* **Your Art Direction:** "Design a small bubble containing 3 small gray dots bouncing with a playful, sequential rhythm in a smooth loop."
* **AC:** [ ] The animation must loop infinitely and smoothly.

### Day 53: Sticky Chat Input
* **UX Problem:** Input areas expanding awkwardly ruin chat apps.
* **Initial Prompt:** "Design a message typing box and a send button fixed to the bottom of the page."
* **Your Art Direction:** "Allow the input height to expand as thoughts grow (up to 4 lines). Use a sleek paper plane icon for the send button. Anchor the bar to the bottom."
* **AC:** [ ] The input bar must remain anchored to the bottom.

### Day 54: Read Receipts
* **UX Problem:** Uncertainty about whether a message was delivered creates anxiety.
* **Initial Prompt:** "Add timestamp and 'read status' icons below a sent message."
* **Your Art Direction:** "Use subtle, reassuring checkmarks: single gray for sent, double gray for delivered, and double blue for read. Keep them small and elegant."
* **AC:** [ ] The status icons must be small but legible.

### Day 55: Message Hover Actions
* **UX Problem:** Persistent "Reply" and "Delete" buttons on every single message clutter the thread.
* **Initial Prompt:** "Design 'Reply' and 'Delete' buttons for a chat bubble."
* **Your Art Direction:** "Keep the conversation clean. Make these buttons float gently into view right next to the bubble *only* when the mouse hovers over it."
* **AC:** [ ] Action buttons must be hidden by default to save space.

### Day 56: Nested Comments
* **UX Problem:** Flat comment threads make it impossible to track who is replying to whom.
* **Initial Prompt:** "Design a main comment and a sub-comment (reply) nested underneath it."
* **Your Art Direction:** "Indent the sub-comment visually and anchor it to the parent by drawing a thin, delicate gray connecting line down the left edge."
* **AC:** [ ] The visual hierarchy and indentation must be explicitly clear.

### Day 57: @Mention Highlighting
* **UX Problem:** Mentions get completely lost in large blocks of plain text.
* **Initial Prompt:** "Design a text block containing an @username mention."
* **Your Art Direction:** "Make the mentioned name bold, clickable, and styled in the brand's primary color. Add a light background tint when hovered."
* **AC:** [ ] The @mention must immediately draw the eye compared to standard text.

### Day 58: Contact Form (Floating Labels)
* **UX Problem:** Static labels placed above inputs take up too much valuable vertical space.
* **Initial Prompt:** "Design a contact form with Name, Email, Subject, and Message fields."
* **Your Art Direction:** "Make the placeholder text shrink and glide out of the way to the top border when the input is focused, leaving the space clean for typing."
* **AC:** [ ] The label transition must be smooth and prevent text overlap.

### Day 59: Notification Bell & Badge
* **UX Problem:** Unobtrusive yet noticeable alert design is a delicate balance.
* **Initial Prompt:** "Design a notification bell icon for a top navigation bar."
* **Your Art Direction:** "Place a small red dot on the bell. Add a gentle, expanding radar pulse animation radiating from the dot to draw the eye softly."
* **AC:** [ ] The red badge must only be visible if unread notifications exist.

### Day 60: Notification Popover
* **UX Problem:** Forcing users to navigate to a full page just to check a quick alert breaks their flow.
* **Initial Prompt:** "Design a popover menu containing 3 notifications that opens when the bell is clicked."
* **Your Art Direction:** "Highlight the unread notifications with a whisper of pale blue color in the background. Read notifications stay white."
* **AC:** [ ] The popover must align directly below the icon and close when clicking outside of it.

---

## 📰 PHASE 7: Content & Article Layout (Days 61-70)
*Focus: Perfecting typography, spacing, and the reading experience.*

### Day 61: Blog Typography Layout
* **UX Problem:** Poor line height and excessive line length make reading exhausting.
* **Initial Prompt:** "Design an article reading area with a title, date, and 3 paragraphs."
* **Your Art Direction:** "Set the paragraph line-height generously. Restrict the width of the text column to an optimal line-length (around 65 characters) for reading comfort."
* **AC:** [ ] Readability must be prioritized with ample whitespace.

### Day 62: Reading Progress Bar
* **UX Problem:** Users need to gauge the time commitment required for a long article.
* **Initial Prompt:** "Design a thin progress bar at the top of the page that fills as the user scrolls down."
* **Your Art Direction:** "Create a thin, brand-colored ribbon of progress fixed to the very top edge of the screen that grows as they read."
* **AC:** [ ] The width of the bar must scale percentage-wise tied to the scroll position.

### Day 63: Table of Contents (Sticky)
* **UX Problem:** Users struggle to navigate back and forth between sections in long-form content.
* **Initial Prompt:** "Design a Table of Contents menu pinned to the left side of the article."
* **Your Art Direction:** "As the user scrolls, highlight their current location dynamically in the menu by making that section bold and colored."
* **AC:** [ ] Clicking a TOC link must trigger a smooth scroll to that section.

### Day 64: Social Share Buttons
* **UX Problem:** Extremely colorful share buttons distract the reader from the actual content.
* **Initial Prompt:** "Design a share group consisting of X (Twitter), LinkedIn, and 'Copy Link' buttons."
* **Your Art Direction:** "Keep the buttons beautifully desaturated until intention is shown. They should only reveal their vibrant brand colors upon hover."
* **AC:** [ ] Clicking 'Copy Link' must spawn a brief 'Copied' tooltip.

### Day 65: Author Bio Box
* **UX Problem:** Articles without author context lack authority and fail to build an audience.
* **Initial Prompt:** "Design a box at the end of the article containing the author's photo, bio, and a 'Follow' button."
* **Your Art Direction:** "Visually separate the box to give credit. Give it a slightly off-white background and an elegant, outlined 'Follow' button."
* **AC:** [ ] The component must be visually isolated from the main text body.

### Day 66: Related Articles (Hover Zoom)
* **UX Problem:** High bounce rates occur when users hit the bottom of the page with nowhere to go.
* **Initial Prompt:** "Design 3 small 'You Might Also Like' cards displayed at the end of the post."
* **Your Art Direction:** "Invite clicks with a subtle image zoom. When hovering over the cards, make the inner image scale up smoothly without breaking the card's borders."
* **AC:** [ ] Card heights must be uniformly equal.

### Day 67: Newsletter Subscription
* **UX Problem:** Aggressive subscription boxes trigger a fear of spam and deter users.
* **Initial Prompt:** "Design a newsletter signup box with an email input and a 'Subscribe' button."
* **Your Art Direction:** "Add trust-building microcopy just below the input in a delicate gray font: 'We promise not to spam you. Unsubscribe anytime.'"
* **AC:** [ ] The form and the trust-building microcopy must be tightly grouped.

### Day 68: Audio Player (Listen to Article)
* **UX Problem:** Lack of accessibility options alienates visually impaired or multitasking users.
* **Initial Prompt:** "Design a small 'Listen to this article' play button at the top of the post."
* **Your Art Direction:** "Morph the play icon seamlessly into a pause icon when clicked. Display a tiny, dancing audio waveform next to it to indicate playback."
* **AC:** [ ] The playback state must be visually unambiguous.

### Day 69: Image Lightbox
* **UX Problem:** Inline images are often too small to inspect details comfortably.
* **Initial Prompt:** "Design a lightbox interface that expands an image to full screen when clicked."
* **Your Art Direction:** "Frame the art with deep contrast. Set the backdrop to a rich 90% black, center the image perfectly, and place a crisp white 'X' close icon."
* **AC:** [ ] Clicking the dark backdrop must also close the lightbox.

### Day 70: Blockquote Styling
* **UX Problem:** Important quotes get lost when styled exactly like standard paragraphs.
* **Initial Prompt:** "Design an elegant blockquote component for use within the article."
* **Your Art Direction:** "Give quotes a distinct typographic voice. Draw a thick, brand-colored line down the left edge, increase the font size slightly, and use a refined italic typeface."
* **AC:** [ ] The quote must clearly stand out from the surrounding text hierarchy.

---

## 📊 PHASE 8: Dashboard & Data Visualization (Days 71-80)
*Focus: Organizing complex data into digestible, hierarchical, and beautiful dashboards.*

### Day 71: The Stat Card
* **UX Problem:** Raw data numbers lack context and fail to indicate performance trends.
* **Initial Prompt:** "Design a small statistic card showing the total number of users."
* **Your Art Direction:** "Add context with trend arrows. Next to the main number, place a green upward arrow with text reading '5% increase'."
* **AC:** [ ] The primary metric must be massive and highly legible.

### Day 72: The Sparkline Chart
* **UX Problem:** Full-blown charts are too complex and bulky for quick overview cards.
* **Initial Prompt:** "Add a simple, minimal line chart (sparkline) below the statistic card."
* **Your Art Direction:** "Create a gentle wave of data. Fill the area beneath the line with a soft, fading gradient to add visual depth without cluttering the card."
* **AC:** [ ] The chart must act as a background element and not overpower the typography.

### Day 73: Fixed Sidebar Navigation
* **UX Problem:** Applications require a rigid, hierarchical structure for primary navigation.
* **Initial Prompt:** "Design a left-aligned sidebar containing a vertical list of menu links."
* **Your Art Direction:** "Anchor the navigation. Highlight the active menu item with a light brand-colored background, bold text, and a thick vertical stripe on the edge."
* **AC:** [ ] The sidebar must have a fixed width, and active elements must be distinct.

### Day 74: Collapsible Sidebar
* **UX Problem:** Fixed sidebars steal valuable screen real estate on smaller desktop windows.
* **Initial Prompt:** "Add a 'Collapse Menu' button to the sidebar. When clicked, only the icons should remain."
* **Your Art Direction:** "Fold it away elegantly. Execute the collapse with a smooth transition, fading out the text labels while keeping the icons perfectly centered."
* **AC:** [ ] Text labels must disappear and icons must center perfectly when collapsed.

### Day 75: Top Navbar & Global Search
* **UX Problem:** Global actions like search and profile access must be reachable from anywhere without clutter.
* **Initial Prompt:** "Design a top navbar containing a search bar and a user profile picture."
* **Your Art Direction:** "Create a crisp, almost invisible separation line and a faint shadow to detach the navbar gracefully from the main content area."
* **AC:** [ ] The search bar must be flexibly centered or aligned to the layout grid.

### Day 76: Activity Feed (Timeline)
* **UX Problem:** System logs are impossible to read without a chronological visual anchor.
* **Initial Prompt:** "Design a vertical timeline listing 'Who did what, and when'."
* **Your Art Direction:** "Connect events with a visual thread. Draw a continuous thin line down the left side, and align the circular node of each activity perfectly over this line."
* **AC:** [ ] The chronological flow must be instantly understandable.

### Day 77: User Profile Dropdown
* **UX Problem:** Mixing safe actions (Settings) with destructive actions (Logout) leads to fatal misclicks.
* **Initial Prompt:** "Design a settings dropdown menu that opens when the top-right profile picture is clicked."
* **Your Art Direction:** "Separate destructive actions with space and color. Place a divider line above the 'Logout' option and style its text in a warning red."
* **AC:** [ ] The dropdown must align flush to the right edge of the profile picture.

### Day 78: Gamified Progress Bar
* **UX Problem:** Users abandon profile completion if there is no visual motivation.
* **Initial Prompt:** "Design a progress bar stating 'Your profile is 70% complete'."
* **Your Art Direction:** "Motivate completion with a smooth fill. Animate the bar filling up from 0 to 70% gracefully on page load. Add inviting text below."
* **AC:** [ ] The load animation must trigger reliably on mount.

### Day 79: Draggable Kanban Card
* **UX Problem:** Users do not know that board items can be dragged if there is no visual affordance.
* **Initial Prompt:** "Design a task card containing a title, tags, and assignee avatars."
* **Your Art Direction:** "Make it lift off the board when grabbed. When hovering over the card, change the cursor to a 'grab' hand and apply a lifting shadow effect."
* **AC:** [ ] The card must visually communicate that it is draggable.

### Day 80: Semantic Status Badges
* **UX Problem:** Text-only statuses ("New", "Urgent", "Pending") blur together when scanning data.
* **Initial Prompt:** "Design two different status badges saying 'Urgent' and 'Pending'."
* **Your Art Direction:** "Use color psychology for urgency. Style the Urgent badge with a harsh red background, and the Pending badge with a mellow yellow background."
* **AC:** [ ] Colors must carry semantic meaning aligned with the status urgency.

---

## ⚙️ PHASE 9: Settings, Edge Cases & Access (Days 81-90)
*Focus: Handling errors, edge cases, and settings elegantly.*

### Day 81: Settings Page Layout
* **UX Problem:** Endless lists of settings options overwhelm the user completely.
* **Initial Prompt:** "Design a page with settings categories (Profile, Notifications) on the left and a content area on the right."
* **Your Art Direction:** "Divide complexity into digestible sections. Ensure the selected category is highlighted on the left, and break the right-side form into sections using clear headings."
* **AC:** [ ] The two-column layout must gracefully stack into a single column on mobile.

### Day 82: Change Password Validation
* **UX Problem:** Changing a password requires strict validation to prevent lockouts.
* **Initial Prompt:** "Design a form with Old Password, New Password, and Confirm New Password fields."
* **Your Art Direction:** "Prevent frustration with instant feedback. If the two new passwords do not match, disable the submit button and instantly display a warning."
* **AC:** [ ] Matching validation must occur in real-time.

### Day 83: Unintrusive Cookie Banner
* **UX Problem:** Banners that block half the screen immediately annoy users.
* **Initial Prompt:** "Design a cookie consent banner with 'Accept' and 'Reject' buttons."
* **Your Art Direction:** "Create a polite, floating card tucked into the bottom-left corner with a soft shadow, instead of a massive screen-blocking wall."
* **AC:** [ ] The banner must not completely obstruct the main reading content.

### Day 84: 2FA Input (OTP)
* **UX Problem:** Entering a 6-digit verification code into a single, generic input field is highly error-prone.
* **Initial Prompt:** "Design 6 separate input boxes for entering a 6-digit SMS code."
* **Your Art Direction:** "Guide the keyboard focus naturally. As the user types a digit into a box, automatically advance the focus to the next box in the sequence."
* **AC:** [ ] Keyboard flow between boxes must be seamless and natural.

### Day 85: Copy to Clipboard UX
* **UX Problem:** Pressing 'Copy' without visual feedback leaves users wondering if the action succeeded.
* **Initial Prompt:** "Design a referral code block with a 'Copy' button next to it."
* **Your Art Direction:** "Reward the click with instant confirmation. Change the button text to 'Copied!', turn it a satisfying green, and revert it after 2 seconds."
* **AC:** [ ] The action must provide immediate visual confirmation.

### Day 86: Inclusive Language Switcher
* **UX Problem:** Using flags alone for language menus causes geopolitical issues and clarity problems.
* **Initial Prompt:** "Design a dropdown menu for switching the website's language."
* **Your Art Direction:** "Respect localization. Display the name of the language in its own native tongue next to the flag (e.g., English, Türkçe, Español)."
* **AC:** [ ] The dropdown options must be crystal clear and close upon selection.

### Day 87: Maintenance Mode Page
* **UX Problem:** Showing raw server errors during downtime erodes brand trust.
* **Initial Prompt:** "Design a full-screen page indicating the website is undergoing maintenance."
* **Your Art Direction:** "Soften the blow with a friendly, high-quality illustration. Center everything perfectly and hide standard navigation headers to remove distractions."
* **AC:** [ ] Standard navigation headers/footers must be hidden to focus the user.

### Day 88: Print-Friendly Layout
* **UX Problem:** Printing a web page directly results in a mess of menus, dark backgrounds, and useless buttons.
* **Initial Prompt:** "Design an invoice/receipt page."
* **Your Art Direction:** "Strip away the noise for pure utility. Ensure that sidebars, action buttons, and dark themes disappear entirely when the user tries to print."
* **AC:** [ ] The printed output must contain only pure, black-and-white data.

### Day 89: Text Truncation
* **UX Problem:** Unusually long names or descriptions break the grid geometry of cards and tables.
* **Initial Prompt:** "Design a narrow card containing a long description text."
* **Your Art Direction:** "Fade out long text gracefully. Clamp the text at exactly 2 lines, append an elegant ellipsis ('...'), and provide a 'Read More' link."
* **AC:** [ ] Text overflow must absolutely never break the container's boundaries.

### Day 90: Image Fallback (Error State)
* **UX Problem:** A broken image icon looks incredibly cheap and ruins the UI aesthetic.
* **Initial Prompt:** "Design a product image component."
* **Your Art Direction:** "Never show a broken aesthetic. If the image fails to load, render a soft, minimalist placeholder box featuring a desaturated version of the brand logo."
* **AC:** [ ] The browser's default broken image icon must never be visible.

---

## 🏆 PHASE 10: System Finalization & Launch (Days 91-100)
*Focus: Polishing the design system to perfection and launching your portfolio.*

### Day 91: Keyboard Shortcuts Modal
* **UX Problem:** Power users require discoverability for fast, keyboard-driven workflows.
* **Initial Prompt:** "Design a modal listing the application's keyboard shortcuts."
* **Your Art Direction:** "Design them like tactile keyboard keys. Style the shortcut keys with subtle borders and shadows to look like physical, pressable buttons."
* **AC:** [ ] The list must be highly legible and organized into columns.

### Day 92: Destructive Action Confirmation
* **UX Problem:** Accidental clicks on critical actions like "Delete Account" are fatal.
* **Initial Prompt:** "Design a 'Delete Account' confirmation modal."
* **Your Art Direction:** "Add intentional friction. Keep the red 'Delete' button fully disabled until the user manually types 'DELETE' into a verification field."
* **AC:** [ ] The critical action must be idiot-proofed behind friction.

### Day 93: Upload Error State
* **UX Problem:** Generic "Upload Failed" messages do not help the user resolve the issue.
* **Initial Prompt:** "Design an error state for a file upload zone."
* **Your Art Direction:** "Clearly explain why it failed. Turn the drop zone border red, insert a warning icon, and explicitly state 'File is too large (Max 5MB)'."
* **AC:** [ ] The user must understand exactly *why* the upload failed.

### Day 94: Empty Data Table
* **UX Problem:** A table with just headers and no rows feels broken or abandoned.
* **Initial Prompt:** "Design a data table containing zero rows."
* **Your Art Direction:** "Invite the first action. Place a visually appealing box inside the table body stating 'No clients added yet', accompanied by a massive, inviting CTA button."
* **AC:** [ ] The empty feeling must be replaced by a clear Call To Action.

### Day 95: Theme Color Picker
* **UX Problem:** Lack of clear selection states frustrates users in customization panels.
* **Initial Prompt:** "Design an area with 5 different color circles to change the app's theme."
* **Your Art Direction:** "Make the selection state unmistakable. Emphasize the chosen color circle by wrapping it in a white gap and a colored outer ring."
* **AC:** [ ] The active selection must be undeniably distinct from the others.

### Day 96: Dark Mode Toggle Polish
* **UX Problem:** Changing themes needs to feel graceful, not jagged.
* **Initial Prompt:** "Revisit the Dark Mode toggle switch."
* **Your Art Direction:** "Fade the lights slowly, don't snap. Ensure the background colors of the entire app transition smoothly rather than blinking instantly from white to black."
* **AC:** [ ] Global theme changes must feel cinematic and smooth.

### Day 97: Focus Trap (Accessibility)
* **UX Problem:** Keyboard users get lost if they can tab out of an open modal into the background page.
* **Initial Prompt:** "Design a pop-up modal."
* **Your Art Direction:** "Keep keyboard users grounded. Implement a focus trap so pressing the Tab key cycles only through the inputs inside the modal until it is closed."
* **AC:** [ ] Background elements must not be focusable while the modal is open.

### Day 98: Update Alert Banner
* **UX Problem:** Forcing a page refresh for an update interrupts the user's current task.
* **Initial Prompt:** "Design a toast message: 'New version available, please refresh'."
* **Your Art Direction:** "Create a polite, unignorable banner. Format it as a thin, edge-to-edge blue strip at the bottom. It cannot be dismissed; they must click 'Refresh'."
* **AC:** [ ] The alert must command attention without blocking current interactions.

### Day 99: Global System Polish
* **UX Problem:** Inconsistent corner radii, mixed shadows, and misaligned paddings make the UI look amateurish.
* **Initial Prompt:** "Line up all the button variants, inputs, and cards I have created."
* **Your Art Direction:** "Harmonize all corner radii and shadows. Standardize every curve, unify all drop shadows, and ensure brand colors are used mathematically across the board."
* **AC:** [ ] The Design System must feel entirely cohesive, premium, and unified.

### Day 100: DailyShipUI Portfolio Launch
* **UX Problem:** 100 days of intense UI work without a unified, public showcase to demonstrate your new skills.
* **Initial Prompt:** "Design a dark-themed portfolio homepage to showcase my 100-day UI challenge."
* **Your Art Direction:** "Create a dark, premium gallery of your work. Arrange the screenshots into a clean grid, add a grayscale-to-color hover effect, and declare with a massive headline: **'I didn't write code; I directed AI.'**"
* **AC:** [ ] The page must unequivocally prove it was crafted by an AI-Native Design Engineer.

---

## 📢 Sharing Protocol (Daily Execution)
After completing your daily iteration in Cursor, capture a quick screen recording or screenshot of the UI in action. Post it to LinkedIn and X (Twitter) using this exact template:

> **Day [X] - @DailyShipUI**
> 
> 🧠 **The UX Pain Point:** [What did you solve today? e.g., Reducing anxiety in error messages]
> 🎨 **My Art Direction:** [How did you sculpt the AI? e.g., Softened the red to coral, added a gentle head-shake animation]
> 
> *I don't write code. I sculpt pixels using Cursor and Pencil.*
> **#DailyShipUI #ArtDirection #UXDesign #AI**