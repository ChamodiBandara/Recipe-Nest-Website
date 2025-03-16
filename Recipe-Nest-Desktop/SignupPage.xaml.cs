using System;
using System.Windows;

namespace RecipeNest
{
    public partial class SignupPage : Window
    {
        // Replace with your MySQL database credentials
        private readonly DatabaseHelper dbHelper = new DatabaseHelper("localhost", " recipenest-desktop", "root", "Cdbssb@123");

        public SignupPage()
        {
            InitializeComponent();
        }

        private void BtnSignup_Click(object sender, RoutedEventArgs e)
        {
            string username = txtSignupUsername.Text;
            string password = txtSignupPassword.Password;
            string confirmPassword = txtConfirmPassword.Password;

            // Validate input fields
            if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password))
            {
                MessageBox.Show("Email and Password cannot be empty!", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }
            if (password != confirmPassword)
            {
                MessageBox.Show("Passwords do not match!", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Check if username already exists in the database
            if (dbHelper.GetUserByUsername(username) != null)
            {
                MessageBox.Show("Email already exists. Please choose another.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Register User in the database
            Users newUser = new Users(username, password);
            if (dbHelper.AddUser(newUser))
            {
                MessageBox.Show("Signup Successful! Please login.", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                // Redirect to Login Page
                LoginPage loginPage = new();
                loginPage.Show();
                this.Close();
            }
            else
            {
                MessageBox.Show("Signup failed. Please try again.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void btnGoToLogin_Click(object sender, RoutedEventArgs e)
        {
            // Redirect to Login Page
            LoginPage loginPage = new();
            loginPage.Show();
            this.Close();
        }
        private void btnSignup_Click(object sender, RoutedEventArgs e)
        {
            string username = txtSignupUsername.Text;
            string password = txtSignupPassword.Password;
            string confirmPassword = txtConfirmPassword.Password;

            // Validate input fields
            if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password))
            {
                MessageBox.Show("Email and Password cannot be empty!", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }
            if (password != confirmPassword)
            {
                MessageBox.Show("Passwords do not match!", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Check if username already exists in the database
            if (dbHelper.GetUserByUsername(username) != null)
            {
                MessageBox.Show("Email already exists. Please choose another.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Register User in the database
            Users newUser = new Users(username, password);
            if (dbHelper.AddUser(newUser))
            {
                MessageBox.Show("Signup Successful! Please login.", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                // Redirect to Login Page
                LoginPage loginPage = new LoginPage();
                Application.Current.MainWindow = loginPage; // Set LoginPage as the main window
                loginPage.Show();
                this.Close(); // Close the SignupPage
            }
            else
            {
                MessageBox.Show("Signup failed. Please try again.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}