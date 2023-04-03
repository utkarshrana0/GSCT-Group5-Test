/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a subpage of the page
    * @param path path of the subpage (e.g. /path/to/page.html)
    */
    openApplicationURL() {
        return browser.url('https://recepie-generator.vercel.app/')
    }
}
