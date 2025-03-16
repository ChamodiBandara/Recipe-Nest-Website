using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace RecipeNest
{
    public class DatabaseHelper
    {
        private readonly string connectionString;

        public DatabaseHelper(string server, string database, string user, string password)
        {
            connectionString = $"Server={server};Database={database};User ID={user};Password={password};";
        }

        // Add a new user to the database
        public bool AddUser(Users user)
        {
            try
            {
                using (MySqlConnection conn = new MySqlConnection(connectionString))
                {
                    conn.Open();
                    string query = "INSERT INTO Users (Username, Password) VALUES (@username, @password)";
                    MySqlCommand cmd = new MySqlCommand(query, conn);
                    cmd.Parameters.AddWithValue("@username", user.Username);
                    cmd.Parameters.AddWithValue("@password", user.Password); // Directly use user.Password
                    int result = cmd.ExecuteNonQuery();
                    return result > 0;
                }
            }
            catch (Exception ex)
            {
                // Log the error or handle it appropriately
                throw new Exception("Error adding user to the database.", ex);
            }
        }

        // Get a user by username
        public Users GetUserByUsername(string username)
        {
            if (string.IsNullOrEmpty(username))
            {
                throw new ArgumentException("Username cannot be null or empty.");
            }

            try
            {
                using (MySqlConnection conn = new MySqlConnection(connectionString))
                {
                    conn.Open();
                    string query = "SELECT * FROM Users WHERE Username = @username";
                    MySqlCommand cmd = new MySqlCommand(query, conn);
                    cmd.Parameters.AddWithValue("@username", username);
                    using (MySqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            string dbUsername = reader["Username"].ToString();
                            string dbPassword = reader["Password"].ToString();

                            if (dbUsername == null || dbPassword == null)
                            {
                                throw new InvalidOperationException("Username or password cannot be null.");
                            }

                            return new Users(dbUsername, dbPassword)
                            {
                                UserID = Convert.ToInt32(reader["UserID"])
                            };
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Log the error or handle it appropriately
                throw new Exception("Error retrieving user from the database.", ex);
            }

            return null; // Explicitly return null if no user is found
        }

        // Add a new recipe to the database
        public bool AddRecipe(Recipe recipe)
        {
            try
            {
                using (MySqlConnection conn = new MySqlConnection(connectionString))
                {
                    conn.Open();
                    string query = "INSERT INTO Recipes (ItemID, ItemName, Date, ItemCategory) VALUES (@ItemID, @ItemName, @Date, @ItemCategory)";
                    MySqlCommand cmd = new MySqlCommand(query, conn);
                    cmd.Parameters.AddWithValue("@ItemID", recipe.ItemID);
                    cmd.Parameters.AddWithValue("@ItemName", recipe.ItemName);
                    cmd.Parameters.AddWithValue("@Date", recipe.Date);
                    cmd.Parameters.AddWithValue("@ItemCategory", recipe.ItemCategory);
                    int result = cmd.ExecuteNonQuery();
                    return result > 0;
                }
            }
            catch (Exception ex)
            {
                // Log the error or handle it appropriately
                throw new Exception("Error adding recipe to the database.", ex);
            }
        }

        // Fetch all recipes from the database
        public List<Recipe> GetRecipes()
        {
            List<Recipe> recipes = new List<Recipe>();
            try
            {
                using (MySqlConnection conn = new MySqlConnection(connectionString))
                {
                    conn.Open();
                    string query = "SELECT * FROM Recipes";
                    MySqlCommand cmd = new MySqlCommand(query, conn);
                    using (MySqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            recipes.Add(new Recipe
                            {
                                ItemID = reader["ItemID"].ToString(),
                                ItemName = reader["ItemName"].ToString(),
                                Date = reader["Date"].ToString(),
                                ItemCategory = reader["ItemCategory"].ToString()
                            });
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Log the error or handle it appropriately
                throw new Exception("Error retrieving recipes from the database.", ex);
            }
            return recipes;
        }

        // Delete a recipe from the database by ItemID
        public bool DeleteRecipe(string itemID)
        {
            try
            {
                using (MySqlConnection conn = new MySqlConnection(connectionString))
                {
                    conn.Open();
                    string query = "DELETE FROM Recipes WHERE ItemID = @ItemID";
                    MySqlCommand cmd = new MySqlCommand(query, conn);
                    cmd.Parameters.AddWithValue("@ItemID", itemID);
                    int result = cmd.ExecuteNonQuery();
                    return result > 0;
                }
            }
            catch (Exception ex)
            {
                // Log the error or handle it appropriately
                throw new Exception("Error deleting recipe from the database.", ex);
            }
        }
    }
}