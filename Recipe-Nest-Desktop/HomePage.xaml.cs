using Recipe_Nest_Desktop;
using System;
using System.Collections.Generic;
using System.Windows;

namespace RecipeNest
{
    public partial class HomePage : Window
    {
        public HomePage()
        {
            InitializeComponent();
            LoadDashboard();
        }

        // Load dashboard data
        private void LoadDashboard()
        {
            //database c
            txtTotalRecipes.Text = "25"; // Example: Total recipes
            txtTotalUsers.Text = "100"; // Example: Total users
            txtRecentActivity.Text = "5 new recipes added today";


            List<Recipe> recentRecipes = new()
            {
                //new Recipe("Pasta Carbonara", DateTime.Now.ToString("yyyy-MM-dd")),
                //new Recipe("Chicken Curry", DateTime.Now.ToString("yyyy-MM-dd")),
                //new Recipe("Chocolate Cake", DateTime.Now.ToString("yyyy-MM-dd"))
            };
            lstRecentRecipes.ItemsSource = recentRecipes;
        }

        //  "Dashboard" button
        private void btnDashboard_Click(object sender, RoutedEventArgs e)
        {
            DashboardPanel.Visibility = Visibility.Visible;
            MainContentFrame.Visibility = Visibility.Collapsed;
        }

        //  "User Management" button
        private void btnUserManagement_Click(object sender, RoutedEventArgs e)
        {
            UserManagement userManagementWindow = new();
            userManagementWindow.Show(); // Open the User Management window
        }

        //  "Recipe Management" button
        private void btnRecipeManagement_Click(object sender, RoutedEventArgs e)
        {
            RecipeManagement recipeManagementWindow = new();
            recipeManagementWindow.Show(); // Open the Recipe Management window
        }

        //  "Logout" button
        private void btnLogout_Click(object sender, RoutedEventArgs e)
        {
            LoginPage loginPage = new();
            loginPage.Show();
            this.Close(); // Close the current HomePage window
        }
    }

    
}