using System;
using System.Collections.Generic;
using System.Windows;

namespace RecipeNest
{
    public partial class RecipeManagement : Window
    {
        private DatabaseHelper dbHelper;

        public RecipeManagement()
        {
            InitializeComponent(); // Initialize the XAML components

            // Initialize the DatabaseHelper with your MySQL connection details
            dbHelper = new DatabaseHelper("localhost", " recipenest-desktop", "root", "Cdbssb@123");

            LoadRecipes(); // Load recipes when the window is loaded
        }

        // Load recipes into the ListView from the database
        private void LoadRecipes()
        {
            try
            {
                List<Recipe> recipes = dbHelper.GetRecipes();
                lstRecipes.ItemsSource = recipes; // Bind the list to the ListView
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading recipes: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        // Event handler for the "Refresh" button
        private void btnRefresh_Click(object sender, RoutedEventArgs e)
        {
            LoadRecipes(); // Refresh the recipe list
        }

        // Event handler for the "Add Recipe" button
        private void btnAddRecipe_Click(object sender, RoutedEventArgs e)
        {
            AddEditRecipeDialog dialog = new();
            if (dialog.ShowDialog() == true)
            {
                try
                {
                    bool isAdded = dbHelper.AddRecipe(dialog.Recipe);
                    if (isAdded)
                    {
                        MessageBox.Show("Recipe added successfully!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                        LoadRecipes(); // Refresh the ListView
                    }
                    else
                    {
                        MessageBox.Show("Failed to add the recipe.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"Error adding recipe: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }

        // Event handler for the "Delete Recipe" button
        private void btnDeleteRecipe_Click(object sender, RoutedEventArgs e)
        {
            Recipe selectedRecipe = (Recipe)lstRecipes.SelectedItem;
            if (selectedRecipe == null)
            {
                MessageBox.Show("Please select a recipe to delete.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            MessageBoxResult result = MessageBox.Show(
                $"Are you sure you want to delete '{selectedRecipe.ItemName}'?",
                "Confirm Delete",
                MessageBoxButton.YesNo,
                MessageBoxImage.Warning);

            if (result == MessageBoxResult.Yes)
            {
                try
                {
                    bool isDeleted = dbHelper.DeleteRecipe(selectedRecipe.ItemID);
                    if (isDeleted)
                    {
                        MessageBox.Show("Recipe deleted successfully!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                        LoadRecipes(); // Refresh the ListView
                    }
                    else
                    {
                        MessageBox.Show("Failed to delete the recipe.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"Error deleting recipe: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }
    }
}