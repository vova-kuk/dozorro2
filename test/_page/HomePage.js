import AppPage from "./AppPage";

class HomePage extends AppPage{
    open(path) {
        super.open('https://dev.dozorro.work/');
    }

    verifyElementText(element, text) {
        browser.waitUntil(() => element.getText() === text, 5000, "Doesn't match Text");
    }

    get header() {
        return $('//h2');
    }


}

export default new HomePage();