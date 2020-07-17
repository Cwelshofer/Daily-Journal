/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },

    {
        id:2,
        date:"7/17/2020",
        concept: "Fundamentals Workshop",
        entry:"We reviewed a lot of what we have learned so far in JavaScript.",
        Mood:"Happy"
    },

    {
        id:3,
        date:"7/16/2020",
        concept: "Filtering in JavaScript",
        entry:"We learned how to filter certain objects to be in there own array on the webpage",
        Mood:"Happy"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}