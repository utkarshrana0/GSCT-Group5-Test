import recipeAppPage from '../pageobjects/recipeApp.page.js'

describe('Test Recipe Generator Application', () =>{
    it('Navigate to Recipe Generator Application webpage', async() => {
        await recipeAppPage.openApplicationURL()
        await expect(recipeAppPage.appBanner).toBeDisplayed()
        await expect(recipeAppPage.appHeadline).toBeDisplayed()
    })

    it('Add ingredients for the recipe', async() => {
        await expect(recipeAppPage.tryNowButton).toBeClickable()
        await recipeAppPage.tryNowButton.click()
        await recipeAppPage.addMoreButton.click()
        await recipeAppPage.ingredientInputs[3].setValue('chicken')
        await recipeAppPage.addMoreButton.click()
        await recipeAppPage.ingredientInputs[4].setValue('garlic')
    })

    it('Validate recipe generation functionality', async() => {
        await expect(recipeAppPage.generateButton).toBeClickable()
        await recipeAppPage.generateButton.click()
        await recipeAppPage.validateRecipeListNotEmpty()
        await expect(recipeAppPage.recipeSteps).toBeDisplayed()
        await expect(recipeAppPage.recipeInstructions).toBeDisplayed()
        await expect(recipeAppPage.fullIngredientsList).toBeExisting()
    })

    it('Navigate back to home screen', async() => {
        await expect(recipeAppPage.clearButton).toBeClickable()
        await recipeAppPage.clearButton.click()
        await expect(recipeAppPage.appBanner).toBeDisplayed()
        await expect(recipeAppPage.appHeadline).toBeDisplayed()
    })
})