<?php
                $command = 'dir C:\ ';
                $output = shell_exec($command);
            
                echo json_encode(array('result'=>$output));
            ?>
