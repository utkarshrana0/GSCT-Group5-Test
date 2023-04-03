import Page from './page.js';
import { assert } from 'chai';

/**
 * subpage containing specific selectors and methods for a specific page
 */
class recipeAppPage extends Page {
    /**
     * define selectors using getter methods
     */
    get appBanner(){
        return $(".//div[@class='space-x-5']")
    }

    get appHeadline(){
        return $(".//div[@class='w-[300px] mt-5 font-Serif-pro text-xl']")
    }

    get tryNowButton(){
        return $(".//span[text()='Try Now']/ancestor::button")
    }

    get ingredientInputs(){
        return $$(".//div/input")
    }

    get addMoreButton(){
        return $(".//button[text()='Add More']")
    }

    get generateButton(){
        return $(".//span[text()='Generate']/ancestor::button")
    }

    get clearButton(){
        return $(".//span[text()='Clear']/ancestor::button")
    }

    get recipeList(){
        return $$(".//button[@class = 'relative h-[90px] w-[250px]']//div[2]")
    }

    get recipeSteps(){
        return $(".//div[text()='Steps']")
    }

    get recipeInstructions(){
        return $(".//div[@class = 'bg-white shadow rounded-l-xl rounded-r-md h-[200px] w-[450px] px-5 py-3 overflow-y-scroll']")
    }

    get fullIngredientsList(){
        return $(".//div[@class='bg-white shadow rounded-l-xl h-[200px] w-[450px] px-8 py-3 overflow-y-scroll']//ol")
    }

    async validateRecipeListNotEmpty(){
        let recipe1 = await this.recipeList[0].getText()
        let recipe2 = await this.recipeList[1].getText()
        let recipe3 = await this.recipeList[2].getText()
        console.info(recipe1, recipe2, recipe3)
        assert.notEqual(recipe1, '---')
        assert.notEqual(recipe2, '---')
        assert.notEqual(recipe3, '---')
    }
}
export default new recipeAppPage();
