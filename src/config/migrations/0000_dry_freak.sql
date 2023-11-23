CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email_address` text NOT NULL,
	`password` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_address_unique` ON `users` (`email_address`);