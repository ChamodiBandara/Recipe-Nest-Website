using System;
using System.Collections.Generic;
using System.Windows;

namespace RecipeNest
{
    public partial class UserManagement : Window
    {
        public UserManagement()
        {
            InitializeComponent(); // Initialize the XAML components
            LoadUsers(); // Load users when the window is loaded
        }

        // Load users into the ListView
        private void LoadUsers()
        {
            // Replace with database logic to fetch users
            List<User> users = new List<User>
            {
                new User("john_doe", "john.doe@example.com", "2023-10-01", "Active"),
                new User("jane_smith", "jane.smith@example.com", "2023-09-15", "Active"),
                new User("alice_wong", "alice.wong@example.com", "2023-08-20", "Inactive")
            };

            lstUsers.ItemsSource = users; // Bind the list to the ListView
        }

        // Event handler for the "Refresh" button
        private void btnRefresh_Click(object sender, RoutedEventArgs e)
        {
            LoadUsers(); // Refresh the user list
        }
    }

    // User class with Username, Email, DateJoined, and Status
    public class User
    {
        public string Username { get; set; } // Username of the user
        public string Email { get; set; } // Email ID of the user
        public string DateJoined { get; set; } // Date the user joined
        public string Status { get; set; } // Status of the user (e.g., Active, Inactive)

        // Constructor to initialize properties
        public User(string username, string email, string dateJoined, string status)
        {
            Username = username ?? throw new ArgumentNullException(nameof(username));
            Email = email ?? throw new ArgumentNullException(nameof(email));
            DateJoined = dateJoined ?? throw new ArgumentNullException(nameof(dateJoined));
            Status = status ?? throw new ArgumentNullException(nameof(status));
        }
    }
}