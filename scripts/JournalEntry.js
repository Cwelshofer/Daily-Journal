/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
           <div class="journal__date">${entry.date}</div>
           <div class="journal__concept">${entry.concept}</div>
           <div class="journal__entry">${entry.entry}</div>
        </section>
    `
}