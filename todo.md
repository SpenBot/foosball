
> Turtles Forms and app build, clean up notes for it
    > actually, I think I should change it to college foosball or something (and do more complex associations for sequelize)
    > players can belong to many teams, and have any positions, etc
    > use like nfl.com for inspirations, or fantasy football, and player stats, you can't see other team players unless you're an admin?

- positions are forward, middle-fielder, defense, and keeper
- coach?

- players have stats, or profiles
- players can belong to any teams
- teams can have many players
- players can have play any position, and also have multiple per team
- there are also games/matches

- players can also make "plays" or "strats"
  - belongs to a team, anyone on your team can edit your play, but keep audit, of who edited
  - have a working draft, final draft, and official plays

- would need alerts, upcoming games, recently played games  


+ player_model
+ team_model
+ position_model
+ player_team_join
+ player_team_position_join

+ matches
+ plays (dates and stuff, drawing pdf/png/jpg attachments)

> first, make the new tables for players, teams, positions, and official-plays/wd-plays/fd-plays
  - figure out if I need a table for positions actually ...
  - rights? (like only coaches can add players)
> then gotta write the sequelize for it, return proper associations for an index and getOne
> build views for grids for teams/players, and profiles for team/players
> build a gateway with authentication
> build authorization for backend routes
> build a quick log-in shit
> build my teams, and my teammates pages maybe
> build a plays drop down, for view or create, which will prompt which
> make a create-plays page, draft-plays, official-plays
> try docker shit




- maybe have charts too, show the player graph vs average






>> END
