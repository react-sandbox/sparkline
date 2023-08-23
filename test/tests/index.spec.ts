import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Sparkline', () => {
  test('renders with width and height', async ({ page }) => {
    await expect(page.locator('[data-sandbox-sparkline]').first()).toHaveCSS(
      'width',
      '100px'
    )
    await expect(page.locator('[data-sandbox-sparkline]').first()).toHaveCSS(
      'height',
      '100px'
    )
  })

  test('renders line with values', async ({ page }) => {
    await expect(
      page.locator('[data-sandbox-sparkline] path').nth(1)
    ).toHaveAttribute(
      'd',
      'M0 92  L 0 92, L 17 83, L 33 92, L 50 67, L 67 50, L 83 33, L 100 50'
    )
  })
})
